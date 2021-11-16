from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Character, Course
from .serializers import CharacterSerializer, CourseSerializer


class CourseView(generics.ListCreateAPIView):
    # permission_classes = (permissions.AllowAny, )#dzięki tej linijce nie jest wymagany tokken podczas zapytania do bazy danych
    queryset = Course.objects.all()
    serializer_class = CourseSerializer


class CharactersView(generics.ListCreateAPIView):
    permission_classes = (
        permissions.AllowAny,
    )  # dzięki tej linijce nie jest wymagany tokken podczas zapytania do bazy danych
    queryset = Character.objects.all()
    serializer_class = CharacterSerializer

    def get(self, request, course_id):
        try:
            if course_id != None:
                course = Course.objects.get(id=course_id)
                character = Character.objects.filter(course=course)
                data = [CharacterSerializer(model).data for model in character]
                return Response({"characters": data})
        except:
            return Response(
                {"error": "Something went wrong when geting character for course"}
            )


class CharacterView(APIView):
    permission_classes = (
        permissions.AllowAny,
    )  # dzięki tej linijce nie jest wymagany tokken podczas zapytania do bazy danych

    def get(self, request, course_id):
        try:
            user = self.request.user
            if course_id != None:
                course = Course.objects.get(id=course_id)
                character = Character.objects.filter(course=course)
                character = character.filter(user=user)
                data = [CharacterSerializer(model).data for model in character]
                return Response({"characters": data})
        except:
            return Response(
                {"error": "Something went wrong when geting character for course"}
            )


class GetCourseView(APIView):
    def get(self, request, *args, **kwargs):
        try:
            course_id = request.query_params["id"]
            if course_id != None:
                course = Course.objects.get(id=course_id)
                serializer = CourseSerializer(course)
                return Response({"course": serializer.data})
        except:
            return Response({"error": "Something went wrong when geting course by id"})

    def delete(self, request, *args, **kwargs):
        try:
            course_id = request.query_params["id"]
            if course_id != None:
                course = Course.objects.get(id=course_id)
                course.delete()
                return Response({"info": "usunieto poprawnie"})
        except:
            return Response({"error": "cos poszlo nie tak podczas usuwania kursu"})


class JoinCourseView(APIView):
    def put(self, request, format=None):
        try:
            user = self.request.user

            data = self.request.data
            course_id = data["course_id"]

            course = Course.objects.get(id=course_id)

            course.participants.add(user)
            if not Character.objects.filter(course=course).filter(user=user):
                character = Character(name=user.first_name, user=user, course=course)
                character.save()

            return Response({"info": "wszystko okej przy dodaniu uczestnika"})
        except:
            return Response({"error": "Something went wrong when adding participant"})

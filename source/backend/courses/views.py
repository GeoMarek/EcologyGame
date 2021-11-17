from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Character, Course, Item
from .serializers import CharacterSerializer, CourseSerializer, ItemSerializer


#lista wszystkich kursów oraz możliwość tworzenia nowych
class CourseView(generics.ListCreateAPIView):
    permission_classes = (permissions.AllowAny, )#dzięki tej linijce nie jest wymagany tokken podczas zapytania do bazy danych
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

    
#lista wszystkich przedmiotów oraz możliwość tworzenia nowych
class ItemsView(generics.ListCreateAPIView):
    permission_classes = (permissions.AllowAny, )#dzięki tej linijce nie jest wymagany tokken podczas zapytania do bazy danych
    queryset = Item.objects.all()
    serializer_class = ItemSerializer


#lista postaci z danego kursu
class CharactersView(APIView):
    permission_classes = (
        permissions.AllowAny,
    )  # dzięki tej linijce nie jest wymagany tokken podczas zapytania do bazy danych

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


#get nasza postać
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


#Klasa odpowiedzialna za sklep
class CourseItems(APIView):
    permission_classes = (
        permissions.AllowAny,
    )  # dzięki tej linijce nie jest wymagany tokken podczas zapytania do bazy danych

    #get all course itmes
    def get(self, request, course_id):
        try:
            if course_id != None:
                course = Course.objects.get(id=course_id)
                course = CourseSerializer(course)
                data = course.data['store_items']
                return Response({"items": data})
        except:
            return Response(
                {"error": "Something went wrong when geting course's items"}
            )

    #delete item from shop
    def delete(self, request, course_id):
        try:            
            item_id = request.query_params["id"]
            if item_id != None and course_id != None:
                course = Course.objects.get(id=course_id)
                item = Item.objects.get(id=item_id)
                course.store_items.remove(item)
                return Response({"info": "usunieto poprawnie przedmiot ze sklepu"})
        except:
            return Response({"error": "cos poszlo nie tak podczas usuwania przedmiotu ze sklepu"})

    #dodaj item do sklepu
    def put(self, request, course_id, format=None):
        try:
            if course_id != None:
                course = Course.objects.get(id=course_id)
                data = self.request.data
                item_id = data["item_id"]

                item = Item.objects.get(id=item_id)
                course.store_items.add(item)

                return Response({"info": "wszystko okej przy dodaniu przedmiotu do sklepu"})
        except:
            return Response({"error": "Something went wrong when adding item to shop"})


#get konkretny kurs oraz usuń go
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


#dołączanie do kursu
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

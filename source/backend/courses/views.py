from django.db.models.fields import Field
from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Answer, Approach, Character, Course, Item, Question, Quiz
from .serializers import (
    AnswerSerializer,
    ApproachSerializer,
    CharacterSerializer,
    CourseSerializer,
    ItemSerializer,
    QuestionSerializer,
    QuizSerializer,
)


# lista wszystkich kursów oraz możliwość tworzenia nowych
class CourseView(generics.ListCreateAPIView):
    permission_classes = (
        permissions.AllowAny,
    )  # dzięki tej linijce nie jest wymagany tokken podczas zapytania do bazy danych
    queryset = Course.objects.all()
    serializer_class = CourseSerializer


# lista wszystkich przedmiotów oraz możliwość tworzenia nowych
class ItemsView(generics.ListCreateAPIView):
    permission_classes = (
        permissions.AllowAny,
    )  # dzięki tej linijce nie jest wymagany tokken podczas zapytania do bazy danych
    queryset = Item.objects.all()
    serializer_class = ItemSerializer


# lista wszystkich Quiz oraz możliwość tworzenia nowych
class QuizView(generics.ListCreateAPIView):
    permission_classes = (
        permissions.AllowAny,
    )  # dzięki tej linijce nie jest wymagany tokken podczas zapytania do bazy danych
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer


# lista wszystkich Question oraz możliwość tworzenia nowych
class QuestionView(generics.ListCreateAPIView):
    permission_classes = (
        permissions.AllowAny,
    )  # dzięki tej linijce nie jest wymagany tokken podczas zapytania do bazy danych
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer


# lista wszystkich Approach oraz możliwość tworzenia nowych
class ApproachView(generics.ListCreateAPIView):
    permission_classes = (
        permissions.AllowAny,
    )  # dzięki tej linijce nie jest wymagany tokken podczas zapytania do bazy danych
    queryset = Approach.objects.all()
    serializer_class = ApproachSerializer


# lista wszystkich Answer oraz możliwość tworzenia nowych
class AnswerView(generics.ListCreateAPIView):
    permission_classes = (
        permissions.AllowAny,
    )  # dzięki tej linijce nie jest wymagany tokken podczas zapytania do bazy danych
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer


# lista postaci z danego kursu
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


# get nasza postać
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


# Klasa odpowiedzialna za sklep
class CourseItems(APIView):
    permission_classes = (
        permissions.AllowAny,
    )  # dzięki tej linijce nie jest wymagany tokken podczas zapytania do bazy danych

    # get all course itmes
    def get(self, request, course_id):
        try:
            if course_id != None:
                course = Course.objects.get(id=course_id)
                course = CourseSerializer(course)
                data = course.data["store_items"]
                return Response({"items": data})
        except:
            return Response(
                {"error": "Something went wrong when geting course's items"}
            )

    # delete item from shop
    def delete(self, request, course_id):
        try:
            item_id = request.query_params["id"]
            if item_id != None and course_id != None:
                course = Course.objects.get(id=course_id)
                item = Item.objects.get(id=item_id)
                course.store_items.remove(item)
                return Response({"info": "usunieto poprawnie przedmiot ze sklepu"})
        except:
            return Response(
                {"error": "cos poszlo nie tak podczas usuwania przedmiotu ze sklepu"}
            )

    # dodaj item do sklepu
    def put(self, request, course_id, format=None):
        try:
            if course_id != None:
                course = Course.objects.get(id=course_id)
                data = self.request.data
                item_id = data["item_id"]

                item = Item.objects.get(id=item_id)
                course.store_items.add(item)

                return Response(
                    {"info": "wszystko okej przy dodaniu przedmiotu do sklepu"}
                )
        except:
            return Response({"error": "Something went wrong when adding item to shop"})


# get kursy usera lub admina
class GetTheCoursesView(APIView):
    def get(self, request, *args, **kwargs):
        try:
            user = self.request.user
            a1 = request.query_params["a1"]
            if a1 == "user":
                course = Course.objects.filter(participants__id=user.id)
                data = [CourseSerializer(model).data for model in course]
                return Response(data)
            elif a1 == "admin":
                course = Course.objects.filter(admins__id=user.id)
                data = [CourseSerializer(model).data for model in course]
                return Response(data)
            else:
                return Response({"error": "Wrong a1 for geting courses"})
        except:
            return Response({"error": "Something went wrong when geting courses by a1"})


# get konkretny kurs oraz usuń go
class GetCourseView(APIView):
    def get(self, request, *args, **kwargs):
        try:
            course_id = request.query_params["id"]
            if course_id != None:
                course = Course.objects.get(id=course_id)
                serializer = CourseSerializer(course)
                characters = Character.objects.filter(course=course)
                ch_data = [CharacterSerializer(model).data for model in characters]
                return Response({"course": serializer.data,
                                   "participants": ch_data })
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


# dołączanie do kursu
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


# get item
class GetItemView(APIView):
    def get(self, request):
        try:
            item_id = request.query_params["id"]
            if item_id != None:
                item = Course.objects.get(id=item_id)
                serializer = CourseSerializer(item)
                return Response({"item": serializer.data})
        except:
            return Response({"error": "Something went wrong when geting item by id"})


# zarzadzanie eq postaci
class CharcterEqView(APIView):
    def put(self, request, course_id, format=None):
        try:
            user = self.request.user
            data = self.request.data
            course_id = course_id
            course = Course.objects.get(id=course_id)
            character = Character.objects.filter(course=course).get(user=user)
            s_character = CharacterSerializer(character)
            fun_type = data["fun_type"]
            item_id = data["item_id"]
            item = Item.objects.get(id=item_id)
            s_item = ItemSerializer(item)
            if fun_type == "buy_eq":
                if (
                    s_character.data["weapon"] == item_id
                    or s_character.data["armor"] == item_id
                    or item_id in s_character.data["equipment"]
                ):
                    return Response({"error": "Już posiadasz ten przedmiot!"})
                if s_character.data["gold"] < s_item.data["buy_price"]:
                    return Response({"error": "Nie masz wystarczająco złota!"})
                character.gold = s_character.data["gold"] - s_item.data["buy_price"]
                character.equipment.add(item)
                character.save()
            elif fun_type == "sell_eq":
                if item_id not in s_character.data["equipment"]:
                    return Response(
                        {"error": "Nie posiadasz przedmiotu który chcesz sprzedać!"}
                    )
                character.gold = s_character.data["gold"] + s_item.data["sell_price"]
                character.equipment.remove(item)
                character.save()
            elif fun_type == "put_on":
                if item_id not in s_character.data["equipment"]:
                    return Response(
                        {"error": "Nie posiadasz przedmiotu który chcesz ubrać!"}
                    )
                character.equipment.remove(item)
                if s_item.data["eq_type"] == "w":
                    if s_character.data["weapon"]:
                        character.equipment.add(character.weapon)
                    character.weapon = item
                elif s_item.data["eq_type"] == "a":
                    if s_character.data["armor"]:
                        character.equipment.add(character.armor)
                    character.armor = item
                    print(item)
                character.save()
            elif fun_type == "put_off":
                if s_item.data["eq_type"] == "w":
                    character.weapon = None
                elif s_item.data["eq_type"] == "a":
                    character.armor = None
                character.equipment.add(item)
                character.save()
            else:
                return Response({"error": f"Czynność: {fun_type} jest nieobsługiwana!"})
            return Response({"info": f"{fun_type} wykonnane poprawnie"})
        except:
            return Response({"error": f"Something went wrong with {fun_type}"})

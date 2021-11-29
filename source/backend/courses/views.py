import json
import os
from os import name

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
class QuizzesView(generics.ListCreateAPIView):
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
                char = character.get(user=user)
                armor = char.armor
                weapon = char.weapon
                if armor != None:
                    armor = ItemSerializer(armor).data
                else:
                    aromr = {}
                if weapon != None:
                    weapon = ItemSerializer(weapon).data
                else:
                    weapon = {}
                equipment = char.equipment.all()
                equipment = [ItemSerializer(model).data for model in equipment]
                character = character.filter(user=user)
                data = [CharacterSerializer(model).data for model in character]
                return Response(
                    {
                        "characters": data,
                        "weapon": weapon,
                        "armor": armor,
                        "equipment": equipment,
                    }
                )
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
                items = course.store_items.all()
                items = [ItemSerializer(model).data for model in items]
                return Response({"items": items})
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


# Klasa odpowiedzialna za sklep
class AddItemsToCourse(APIView):
    # dodaj item do sklepu
    def put(self, request, course_id, format=None):
        try:
            if course_id != None:
                course = Course.objects.get(id=course_id)
                data = self.request.data
                item_id = data["items_id"]
                items = Item.objects.all()
                for id in item_id:
                    item = items.get(id=id)
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
                return Response({"course": serializer.data, "participants": ch_data})
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
                # if s_character.data["gold"] < s_item.data["buy_price"]:
                #    return Response({"error": "Nie masz wystarczająco złota!"})
                # character.gold = s_character.data["gold"] - s_item.data["buy_price"]
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
            character = Character.objects.filter(course=course)
            char = character.get(user=user)
            armor = char.armor
            weapon = char.weapon
            if armor != None:
                armor = ItemSerializer(armor).data
            else:
                aromr = {}
            if weapon != None:
                weapon = ItemSerializer(weapon).data
            else:
                weapon = {}
            equipment = char.equipment.all()
            equipment = [ItemSerializer(model).data for model in equipment]
            character = character.filter(user=user)
            data = [CharacterSerializer(model).data for model in character]
            return Response(
                {
                    "characters": data,
                    "weapon": weapon,
                    "armor": armor,
                    "equipment": equipment,
                }
            )
        except:
            return Response({"error": f"Something went wrong with {fun_type}"})


# zarzadzanie quizem
class QuizView(APIView):
    # get all course quizzes
    permission_classes = (
        permissions.AllowAny,
    )  # dzięki tej linijce nie jest wymagany tokken podczas zapytania do bazy danych

    def get(self, request, course_id):
        try:
            if course_id != None:
                course = Course.objects.get(id=course_id)
                quizzes = Quiz.objects.filter(course=course)
                q_type = request.query_params["t"]
                if q_type != None and q_type != "all":
                    quizzes = quizzes.filter(quiz_type=q_type)
                data = [QuizSerializer(model).data for model in quizzes]
                return Response({"quizzes": data})
        except:
            return Response(
                {"error": "Something went wrong when geting course's quizzes"}
            )

    def post(self, request, course_id, format=None):
        try:
            data = self.request.data
            course_id = course_id
            course = Course.objects.get(id=course_id)
            quiz_type = data["type"]
            name = data["name"]
            description = data["description"]
            q_g_anw = data["good_answer"]
            q_b_anw1 = data["bad_answer1"]
            q_b_anw2 = data["bad_answer2"]
            q_b_anw3 = data["bad_answer3"]
            dmg = data["dmg"]
            reward = data["reward"]
            reward_exp = reward
            reward_gold = reward
            if quiz_type == Quiz.SelectTypeType.TEST:
                number_of_questions = 1
                max_points = 1
                number_of_approaches = 1
                selecting_result = Quiz.SelectMarkType.BEST
            elif quiz_type == Quiz.SelectTypeType.OPEN:
                number_of_questions = 1
                max_points = 1
                number_of_approaches = 1
                selecting_result = Quiz.SelectMarkType.BEST
            elif quiz_type == Quiz.SelectTypeType.OPEN:
                number_of_questions = 1
                max_points = 1
                number_of_approaches = 1
                selecting_result = Quiz.SelectMarkType.BEST
            elif quiz_type == Quiz.SelectTypeType.OPEN:
                number_of_questions = 1
                max_points = 1
                number_of_approaches = 1
                selecting_result = Quiz.SelectMarkType.BEST
            else:
                return Response({"error": f"Wrong quiz_type: {quiz_type}"})
            quiz = Quiz(
                course=course,
                name=name,
                description=description,
                number_of_questions=number_of_questions,
                max_points=max_points,
                reward_exp=reward_exp,
                reward_gold=reward_gold,
                number_of_approaches=number_of_approaches,
                selecting_result=selecting_result,
                quiz_type=quiz_type,
            )
            quiz.save()
            question = Question(
                quiz=quiz,
                name=name,
                content=description,
                a1=q_g_anw,
                a2=q_b_anw1,
                a3=q_b_anw2,
                a4=q_b_anw3,
                correct_answer=q_g_anw,
                points=reward,
                dmg=dmg,
            )
            question.save()
            return Response({"info": f"Quiz utworzono poprawnie"})
        except:
            return Response({"error": f"Something went wrong when creating quiz"})


class InitEqView(APIView):
    permission_classes = (
        permissions.AllowAny,
    )  # dzięki tej linijce nie jest wymagany tokken podczas zapytania do bazy danych

    def get(self, request):
        module_dir = os.path.dirname(__file__)
        file_path = os.path.join(module_dir, "_manifest.json")
        items = Item.objects.all()
        with open(file_path, encoding="utf-8") as f:
            json_object = json.load(f).items()
            for item in json_object:
                name, data = item
                print(20 * "-")
                print(f"obj_name: {name}")
                if len(items.filter(name=data["name"])) != 0:
                    print("item already in DB")
                    continue
                for key, value in data.items():
                    print(f"{key}: {value}")
                eq = Item()
                for k, v in data.items():
                    setattr(eq, k, v)
                eq.save()
        return Response({"response": "chyba okej dodanie eq"})

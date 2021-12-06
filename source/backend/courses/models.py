from django.conf import settings
from django.db import models
from django.utils.translation import gettext_lazy as _

User = settings.AUTH_USER_MODEL

# Create your models here.


class Item(models.Model):
    class ItemType(models.TextChoices):
        ARMOR = "a", _("Armor")
        WEAPON = "w", _("Weapon")

    name = models.CharField(max_length=64, default="magiczny miecz")
    sell_price = models.IntegerField(default=15)
    buy_price = models.IntegerField(default=30)
    eq_type = models.CharField(
        max_length=1, choices=ItemType.choices, default=ItemType.WEAPON
    )
    stat = models.IntegerField(default=2)
    image = models.CharField(max_length=128, default="miecz.png")

    def _str_(self):
        return self.name


class Course(models.Model):
    admins = models.ManyToManyField(User, related_name="admins")
    participants = models.ManyToManyField(User, related_name="participants", blank=True)
    title = models.CharField(max_length=120)
    description = models.TextField(blank=True)
    is_public = models.BooleanField(default=False)
    join_code = models.CharField(max_length=6, blank=True)
    store_items = models.ManyToManyField(Item, blank=True, related_name="store_items")

    def _str_(self):
        return self.title


class Character(models.Model):
    class DefaultValues:
        max_hp = 10
        curent_hp = 10
        max_exp = 10
        current_exp = 0
        gold = 100
        level = 1
        isAlive = True
        weapon = None
        armor = None
        equipment = []

    course = models.ForeignKey(Course, on_delete=models.CASCADE, blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True)
    name = models.CharField(max_length=24)
    max_hp = models.IntegerField(default=DefaultValues.max_hp)
    curent_hp = models.IntegerField(default=DefaultValues.curent_hp)
    max_exp = models.IntegerField(default=DefaultValues.max_exp)
    current_exp = models.IntegerField(default=DefaultValues.current_exp)
    gold = models.IntegerField(default=DefaultValues.gold)
    level = models.IntegerField(default=DefaultValues.level)
    isAlive = models.BooleanField(default=DefaultValues.isAlive)
    weapon = models.ForeignKey(
        Item, blank=True, on_delete=models.SET_NULL, related_name="weapon", null=True
    )
    armor = models.ForeignKey(
        Item, blank=True, on_delete=models.SET_NULL, related_name="armor", null=True
    )
    equipment = models.ManyToManyField(Item, blank=True, related_name="equipment")

    def _str_(self):
        return self.name


class Quiz(models.Model):
    class SelectMarkType(models.TextChoices):
        BEST = "b", _("Best")
        LAST = "l", _("Last")

    class SelectTypeType(models.TextChoices):
        OPEN = "o", _("Open")
        TEST = "t", _("Test")
        EVENT = "e", _("Event")
        HABIT_P = "hp", _("Habit_P")
        HABIT_N = "hn", _("Habit_N")
        HABIT_M = "hm", _("Habit_M")

    course = models.ForeignKey(Course, on_delete=models.CASCADE, blank=True)
    name = models.CharField(max_length=64, default="nazwa quizu")
    description = models.TextField(default="opis quizu")
    creation_time = models.DateField(auto_now_add=True)
    start_time = models.DateTimeField(auto_now_add=True)
    end_time = models.DateTimeField(auto_now_add=True)
    duration_time = models.DateTimeField(auto_now_add=True)
    number_of_questions = models.IntegerField(default=0)
    max_points = models.IntegerField(default=0)
    reward_exp = models.IntegerField(default=4)
    reward_gold = models.IntegerField(default=3)
    number_of_approaches = models.IntegerField(default=1)
    selecting_result = models.CharField(
        max_length=1, choices=SelectMarkType.choices, default=SelectMarkType.BEST
    )
    quiz_type = models.CharField(
        max_length=2, choices=SelectTypeType.choices, default=SelectTypeType.TEST
    )


# Event


class Question(models.Model):
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE, blank=True)
    # event
    name = models.CharField(max_length=64, default="nazwa pytania")
    content = models.TextField(default="treść zadania")
    a1 = models.TextField(default="odp 1")
    a2 = models.TextField(default="odp 2")
    a3 = models.TextField(default="odp 3")
    a4 = models.TextField(default="odp 4")
    # a5 = models.TextField(default="odp 5")
    # a6 = models.TextField(default="odp 6")
    correct_answer = models.TextField(default="odp 1")
    points = models.IntegerField(default=1)
    dmg = models.IntegerField(default=1)


class Approach(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True)
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE, blank=True)
    # event
    start_time = models.DateTimeField(auto_now_add=True)
    end_time = models.DateTimeField(auto_now_add=True)
    duration_time = models.DurationField(null=True)
    obtained_points = models.IntegerField(default=0)
    result_in_percent = models.DecimalField(max_digits=5, decimal_places=2)
    done = models.BooleanField(default=False)
    checked = models.BooleanField(default=False)


class Answer(models.Model):
    approach = models.ForeignKey(Approach, on_delete=models.CASCADE, blank=True)
    question = models.ForeignKey(Question, on_delete=models.CASCADE, blank=True)
    user_answer = models.CharField(max_length=1)
    is_correct = models.BooleanField(default=False)

from django.conf import settings
from django.db import models
from django.utils.translation import gettext_lazy as _

User = settings.AUTH_USER_MODEL

# Create your models here.


class Item(models.Model):
    class ItemType(models.TextChoices):
        ARMOR = 'a', _('Armor')
        WEAPON = 'w', _('Weapon')

    name = models.CharField(max_length=64, default='magiczny miecz')
    sell_price = models.IntegerField(default=15)
    buy_price = models.IntegerField(default=30)
    eq_type = models.CharField(max_length=1, choices=ItemType.choices, default=ItemType.WEAPON)
    stat = models.IntegerField(default=2)

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
    course = models.ForeignKey(Course, on_delete=models.CASCADE, blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True)
    name = models.CharField(max_length=24)
    max_hp = models.IntegerField(default=10)
    curent_hp = models.IntegerField(default=10)
    max_exp = models.IntegerField(default=10)
    current_exp = models.IntegerField(default=0)
    gold = models.IntegerField(default=0)
    level = models.IntegerField(default=1)
    isAlive = models.BooleanField(default=True)
    weapon = models.ForeignKey(Item, blank=True, on_delete=models.SET_NULL, related_name="weapon", null=True)
    armor = models.ForeignKey(Item, blank=True, on_delete=models.SET_NULL, related_name="armor", null=True)
    equipment = models.ManyToManyField(Item, blank=True, related_name="equipment")

    def _str_(self):
        return self.name


from django.conf import settings
from django.db import models

User = settings.AUTH_USER_MODEL

# Create your models here.


class Course(models.Model):
    admins = models.ManyToManyField(User, related_name="admins")
    participants = models.ManyToManyField(User, related_name="participants", blank=True)
    title = models.CharField(max_length=120)
    description = models.TextField(blank=True)
    is_public = models.BooleanField(default=False)
    join_code = models.CharField(max_length=6, blank=True)

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
    # jeszcze bron, zbroja i ekiwpiunek

    def _str_(self):
        return self.name

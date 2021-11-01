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

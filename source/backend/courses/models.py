from django.db import models
from django.conf import settings
User = settings.AUTH_USER_MODEL

# Create your models here.

class Course(models.Model):
    admins = models.ManyToManyField(User, related_name="admins")
    participants = models.ManyToManyField(User, related_name="participants")
    title = models.CharField(max_length=120)
    description = models.TextField()
    is_public = models.BooleanField(default=True)
    join_code = models.CharField(max_length=6, default="123abc")    

    def _str_(self):
        return self.title
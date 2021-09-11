from django.db import models
from django.conf import settings
User = settings.AUTH_USER_MODEL

# Create your models here.

class Course(models.Model):
    users = models.ManyToManyField(User, blank=True)
    title = models.CharField(max_length=120)
    description = models.TextField()

    def _str_(self):
        return self.title
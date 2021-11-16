from django.conf import settings
from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin,
)
from django.db import models
from django.db.models.signals import post_delete, post_save

User = settings.AUTH_USER_MODEL


class UserAccountManager(BaseUserManager):
    def create_user(self, email, first_name, last_name, password=None):
        if not email:
            raise ValueError("Users must have an email address")

        email = self.normalize_email(email)
        user = self.model(email=email, first_name=first_name, last_name=last_name)

        user.set_password(password)
        user.save()

        return user


class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserAccountManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["first_name", "last_name"]

    ordering = ("created",)

    def get_last_name(self):
        return self.last_name

    def get_first_name(self):
        return self.first_name

    def get_email(self):
        return self.email

    def __str__(self):
        return self.email


class Profile(models.Model):
    GENDER = (
        ("M", "Male"),
        ("F", "Female"),
    )

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=120, blank=False, default="el_imie")
    last_name = models.CharField(max_length=120, blank=False, default="el_nazwisko")
    email = models.EmailField(max_length=255, blank=True)

    def __unicode__(self):
        return f"Profile of {self.first_name}"


def create_profile(sender, instance, created, **kwargs):
    if created:
        prof = Profile.objects.create(user=instance)
        prof.first_name = instance.first_name
        prof.last_name = instance.last_name
        prof.email = instance.email
        prof.save()


post_save.connect(create_profile, sender=UserAccount)


def delete_user(sender, instance=None, **kwargs):
    try:
        instance.user
    except User.DoesNotExist:
        pass
    else:
        instance.user.delete()


post_delete.connect(delete_user, sender=Profile)

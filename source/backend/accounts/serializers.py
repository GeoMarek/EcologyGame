from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model
User = get_user_model()

class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id', 'email', 'first_name', 'last_name', 'password')


from rest_framework import serializers
from .models import Profile

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        #fields = '__all__'
        fields = ('first_name', 'last_name', 'gender')
        
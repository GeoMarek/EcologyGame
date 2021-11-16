from rest_framework import serializers

from .models import Course, Character


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = "__all__"
        
class CharacterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Character
        fields = "__all__"

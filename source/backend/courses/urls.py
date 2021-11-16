from django.urls import path

from .views import (
    CharactersView,
    CharacterView,
    CourseView,
    GetCourseView,
    JoinCourseView,
)

urlpatterns = [
    path("course/", CourseView.as_view()),
    path("course_by_id/", GetCourseView.as_view()),
    path("join_course/", JoinCourseView.as_view()),
    path("course/<int:course_id>/characters/", CharactersView.as_view()),
    path("course/<int:course_id>/character/", CharacterView.as_view()),
]

from django.urls import path

from .views import (
    CharactersView,
    CharacterView,
    CharcterEqView,
    CourseItems,
    CourseView,
    GetCourseView,
    GetItemView,
    ItemsView,
    JoinCourseView,
)

urlpatterns = [
    path("course/", CourseView.as_view()),
    path("course_by_id/", GetCourseView.as_view()),
    path("join_course/", JoinCourseView.as_view()),
    path("<int:course_id>/characters/", CharactersView.as_view()),
    path("<int:course_id>/character/", CharacterView.as_view()),
    path("items/", ItemsView.as_view()),
    path("item_by_id/", GetItemView.as_view()),
    path("<int:course_id>/shop/", CourseItems.as_view()),
    path("<int:course_id>/character/eq/", CharcterEqView.as_view()),
]

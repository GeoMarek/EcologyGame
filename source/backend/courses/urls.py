from django.urls import path

from .views import (
    AnswerView,
    ApproachView,
    CharactersView,
    CharacterView,
    CharcterEqView,
    CourseItems,
    CourseView,
    GetCourseView,
    GetItemView,
    GetTheCoursesView,
    ItemsView,
    JoinCourseView,
    QuestionView,
    QuizView,
)

urlpatterns = [
    path("course/", CourseView.as_view()),
    path("courses/", GetTheCoursesView.as_view()),
    path("course_by_id/", GetCourseView.as_view()),
    path("join_course/", JoinCourseView.as_view()),
    path("<int:course_id>/characters/", CharactersView.as_view()),
    path("<int:course_id>/character/", CharacterView.as_view()),
    path("items/", ItemsView.as_view()),
    path("item_by_id/", GetItemView.as_view()),
    path("<int:course_id>/shop/", CourseItems.as_view()),
    path("<int:course_id>/character/eq/", CharcterEqView.as_view()),
    path("quizzes/", QuizView.as_view()),
    path("questions/", QuestionView.as_view()),
    path("approaches/", ApproachView.as_view()),
    path("answers/", AnswerView.as_view()),
]

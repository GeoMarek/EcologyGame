from django.urls import path

from .views import ProfileView

# from .views import UpdateProfileView

urlpatterns = [
    path("profile/", ProfileView.as_view()),
]

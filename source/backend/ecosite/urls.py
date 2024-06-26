from django.urls import include, path, re_path
from django.views.generic import TemplateView

urlpatterns = [
    path("auth/", include("djoser.urls")),
    path("auth/", include("djoser.urls.jwt")),
    path("course/", include("courses.urls")),
    path("profile/", include("accounts.urls")),
]

urlpatterns += [re_path(r"^.*", TemplateView.as_view(template_name="index.html"))]

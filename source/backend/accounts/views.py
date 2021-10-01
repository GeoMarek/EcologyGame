from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Profile
from .serializers import ProfileSerializer

# Create your views here.


class ProfileView(APIView):
    # get current user_profile
    def get(self, request, format=None):
        try:
            user = self.request.user

            user_profile = Profile.objects.get(user=user)
            user_profile = ProfileSerializer(user_profile)

            return Response({"profile": user_profile.data, "username": str(user)})
        except:
            return Response({"error": "Something went wrong when retrieving profile"})

    def put(self, request, format=None):
        try:
            user = self.request.user

            data = self.request.data
            first_name = data["first_name"]
            last_name = data["last_name"]
            gender = data["gender"]

            Profile.objects.filter(user=user).update(
                first_name=first_name, last_name=last_name, gender=gender
            )

            user_profile = Profile.objects.get(user=user)
            user_profile = ProfileSerializer(user_profile)

            return Response({"profile": user_profile.data, "username": str(user)})
        except:
            return Response({"error": "Something went wrong when updating profile"})


# ta klasa chyba nie potrzeb
class UpdateProfileView(APIView):
    # update current user_profile
    def put(self, request, format=None):
        try:
            user = self.request.user

            data = self.request.data
            first_name = data["first_name"]
            last_name = data["last_name"]
            gender = data["gender"]

            Profile.objects.filter(user=user).update(
                first_name=first_name, last_name=last_name, gender=gender
            )

            user_profile = Profile.objects.get(user=user)
            user_profile = ProfileSerializer(user_profile)

            return Response({"profile": user_profile.data, "username": str(user)})
        except:
            return Response({"error": "Something went wrong when updating profile"})


class ProfileView2(generics.ListCreateAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

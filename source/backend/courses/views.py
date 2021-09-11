from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Course
from .serializers import CourseSerializer
from rest_framework import permissions
from rest_framework import generics

class CourseView(generics.ListCreateAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

# class GetUserProfileView(APIView):
#     def get(self, request, format=None):
#         try:
#             user = self.request.user
#             username = user.username

#             user_profile = UserProfile.objects.get(user=user)
#             user_profile = UserProfileSerializer(user_profile)

#             return Response({ 'profile': user_profile.data, 'username': str(username) })
#         except:
#             return Response({ 'error': 'Something went wrong when retrieving profile' })

# class UpdateUserProfileView(APIView):
#     def put(self, request, format=None):
#         try:
#             user = self.request.user
#             username = user.username

#             data = self.request.data
#             first_name = data['first_name']
#             last_name = data['last_name']
#             phone = data['phone']
#             city = data['city']

#             UserProfile.objects.filter(user=user).update(first_name=first_name, last_name=last_name, phone=phone, city=city)

#             user_profile = UserProfile.objects.get(user=user)
#             user_profile = UserProfileSerializer(user_profile)

#             return Response({ 'profile': user_profile.data, 'username': str(username) })
#         except:
#             return Response({ 'error': 'Something went wrong when updating profile' })
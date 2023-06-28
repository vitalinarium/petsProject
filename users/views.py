from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse
from users.serializer import CustomUserSerializer
# from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
import json
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.views import APIView

# Create your views here.
class CustomUserCreate(APIView):
    permission_classes = [AllowAny]

    def post(self, request, format='json'):
        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BlacklistTokenUpdateView(APIView):
    permission_classes = [AllowAny]
    authentication_classes = ()

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)

# class MyTokenObtainPairView(TokenObtainPairView):
#     serializer_class = MyTokenObtainPairSerializer


# class RegisterView(generics.CreateAPIView):
#     queryset = User.objects.all()
#     permission_classes = (AllowAny,)
#     serializer_class = RegisterSerializer


# @api_view(['GET'])
# def getRoutes(request):
#     routes = [
#         '/users/token/',
#         '/users/register/',
#         '/users/token/refresh/',
#         '/users/test/'
#     ]
#     return Response(routes)


# @api_view(['GET', 'POST'])
# @permission_classes([IsAuthenticated])
# def testEndPoint(request):
#     if request.method == 'GET':
#         data = f"Congratulation {request.user}, your API just responded to GET request"
#         return Response({'response': data}, status=status.HTTP_200_OK)
#     elif request.method == 'POST':
#         try:
#             body = request.body.decode('utf-8')
#             data = json.loads(body)
#             if 'text' not in data:
#                 return Response("Invalid JSON data", status.HTTP_400_BAD_REQUEST)
#             text = data.get('text')
#             data = f'Congratulation your API just responded to POST request with text: {text}'
#             return Response({'response': data}, status=status.HTTP_200_OK)
#         except json.JSONDecodeError:
#             return Response("Invalid JSON data", status.HTTP_400_BAD_REQUEST)
#     return Response("Invalid JSON data", status.HTTP_400_BAD_REQUEST)
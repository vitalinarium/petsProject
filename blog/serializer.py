from rest_framework import serializers
from .models import BlogPost
from django.contrib.auth.base_user import AbstractBaseUser


class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = '__all__'
       







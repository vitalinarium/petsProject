from rest_framework import serializers
from .models import Animal
from django.contrib.auth.base_user import AbstractBaseUser


class AnimalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Animal
        fields = '__all__'
        # fields = ["added_by_user", "category", "name", "age", "image"]



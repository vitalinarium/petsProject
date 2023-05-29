from django.db import models
from django.conf import settings
from datetime import date
from django.contrib.auth.models import User
# Create your models here.

class PrivateMessage(models.Model):
  
    written_by_user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    written_to_user = models.TextField(max_length=255)   
    text_message = models.TextField(max_length=255)   
    date = models.DateTimeField(verbose_name="written", auto_now_add=True)


    def __str__(self):
        return self.text_message


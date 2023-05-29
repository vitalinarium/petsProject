from django.db import models
from django.conf import settings
from datetime import date
from django.contrib.auth.models import User
# Create your models here.

class BlogPost(models.Model):
  
    written_by_user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.TextField(max_length=255)   
    blog_post = models.TextField(max_length=255)   
    date = models.DateTimeField(verbose_name="written", auto_now_add=True)


    def __str__(self):
        return self.title
from django.db import models
from django.conf import settings
from django.urls import reverse
from django.forms import ModelForm
from datetime import date
# Create your models here.

class Animal(models.Model):
    CAT = "CAT"
    DOG = "DOG"
    HUMSTER = "HUMSTER"
    GUINEA_PIG = "GUINEA PIG"
    PARROT = "PARROT"
    OTHER = "OTHER"
    ANIMAL_CHOICES = [
        (CAT, "CAT"),
        (DOG, "DOG"),
        (HUMSTER, "HUMSTER"),
        (GUINEA_PIG, "GUINEA_PIG"),
        (PARROT, "PARROT"),
        (OTHER, "OTHER"),
    ]
    
    added_by_user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    category = models.CharField(
        max_length=35,
        choices=ANIMAL_CHOICES,
        default=CAT,
    )       
    name = models.CharField(max_length=30)
    age = models.FloatField()
    image = models.ImageField(upload_to="uploads")
    description = models.TextField(max_length=255)
    city = models.CharField(max_length=50)
    date = models.DateField(verbose_name="added", default=date.today)


    def __str__(self):
        return self.name
    
    def get_absolute_url(self):
        return reverse('animals', args=(str(self.id)))

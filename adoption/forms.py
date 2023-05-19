from django import forms
# from django.contrib.auth.forms import UserCreationForm
from .models import Animal
# from django.contrib.auth.models import User


# # Create your forms here.
class AddAnimalForm(forms.ModelForm):
    class Meta:
        model = Animal
        fields = ["category", "name", "age", "image", "description", "city"]
      

class SearchAnimalForm(forms.Form):
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
   
    category = forms.ChoiceField(choices=ANIMAL_CHOICES, required=True)
    # age = forms.IntegerField(required=False)
    city = forms.CharField(max_length=35, required=False)
        


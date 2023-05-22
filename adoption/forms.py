from django import forms
# from django.contrib.auth.forms import UserCreationForm
from .models import Animal
# from django.contrib.auth.models import User


# # Create your forms here.
class AddAnimalForm(forms.ModelForm):
    
    class Meta:
        model = Animal        
        fields = ["category", "name", "age", "image", "description", "city"]


    # other_category = forms.CharField(widget=forms.HiddenInput(attrs={"is_hidden":"True"}))

class SearchAnimalForm(forms.Form):
    CAT = "CAT"
    DOG = "DOG"
    HUMSTER = "HUMSTER"
    GUINEA_PIG = "GUINEA PIG"
    PARROT = "PARROT"
    OTHER = "OTHER"
    ANIMAL_CHOICES = [
        ("", ""),
        (CAT, "CAT"),
        (DOG, "DOG"),
        (HUMSTER, "HUMSTER"),
        (GUINEA_PIG, "GUINEA_PIG"),
        (PARROT, "PARROT"),
        (OTHER, "OTHER"),
    ]
    animals = Animal.objects.all()
    cities = {("","")}
    for animal in animals:
            cities.add((animal.city, animal.city)) 
   
    category = forms.ChoiceField(choices=ANIMAL_CHOICES, required=False)
    # age = forms.IntegerField(required=False)
    city = forms.ChoiceField(choices=cities, required=False)
    
        


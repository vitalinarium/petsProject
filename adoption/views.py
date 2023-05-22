from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.template import loader
from django.views.generic import ListView, DetailView, CreateView
from django.views.generic.base import View
from .forms import AddAnimalForm, SearchAnimalForm
from .models import Animal

def get_animals(request):
    animals = Animal.objects.all()    
    context = {'animals': animals}
    return render(request, 'animal.html', context)

def add_animal(request):
    form_animal = AddAnimalForm()
    if request.method == "POST":    
        form_animal = AddAnimalForm(request.POST, request.FILES)
        form_animal.instance.added_by_user = request.user
        # category = request.POST.get('category')
        # if category == "OTHER":
        #     AddAnimalForm.other_category.widget.attrs.update({"is_hidden": "False"})
            

        if form_animal.is_valid():
            form_animal.save()
            print(form_animal["name"])
            return redirect('/animals')
        else:
            print("smthng wrong")

    return render (request=request, template_name="add_animal.html", context={"form":form_animal})

def my_animals(request):
    user_name = request.user
    animals = Animal.objects.filter(added_by_user=user_name)
           
    context = {'animals': animals, "added_by_user":user_name}
    return render(request, 'my_animals.html', context)

def search_animal(request):
    form_search_animal = SearchAnimalForm()
    if request.method == "POST":    
        form_search_animal = SearchAnimalForm(request.POST)
        searched_category = request.POST["category"]
        searched_city = request.POST["city"]
        if searched_category and searched_city:
            data = Animal.objects.filter(category=searched_category,city=searched_city)
            searched = (searched_category, searched_city)
        elif searched_city:
            data = Animal.objects.filter(city=searched_city)
            searched = ("", searched_city)
        elif searched_category:
            data = Animal.objects.filter(category=searched_category)
            searched = (searched_category, "")
        else:
            data = "you must provide data"

        # searched_age = form_search_animal["age"]
        
        # data = Animal.objects.filter(category=searched_category) | Animal.objects.filter(city=searched_city)
        return render (request, template_name="searched_animal.html", context={"animals":data, "searched_cat":searched[0], "searched_city":searched[1]})
    else:
        return render (request, template_name="search_animal.html", context={"form":form_search_animal})
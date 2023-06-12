from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.template import loader
from django.views.generic import ListView, DetailView, CreateView
from django.views.generic.base import View
from .forms import AddAnimalForm, SearchAnimalForm
from .models import Animal
from message.forms import AddMessage
from django.contrib.auth.decorators import login_required
from rest_framework.views import APIView
from django.views.generic import TemplateView
from .serializer import AnimalSerializer
from rest_framework.response import Response



class AnimalView(APIView):
    
    def get(self, request):
        output = [
            {
                # "added_by_user" : output.added_by_user,
                "category" : output.category,
                "name" : output.name,
                "age": output.age,
                "image": output.image.url,
                "description" :output.description,
                "city" : output.city,
                "date" : output.date,
                "added_by_user": output.added_by_user.username,

            } for output in Animal.objects.all()
        ]
        return Response(output)
    
    def post(self, request):
        serializer = AnimalSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
        



def get_animals(request):
    user_name = request.user
    animals = Animal.objects.all()    
    context = {'animals': animals, 'user': user_name}
    return render(request, 'animals.html', context)


@login_required
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
            
            return redirect('/animals')
        else:
            print("smthng wrong")

    return render (request=request, template_name="add_animal.html", context={"form":form_animal})

@login_required
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
            data = ""
            searched = ["",""]
        # searched_age = form_search_animal["age"]
        
        # data = Animal.objects.filter(category=searched_category) | Animal.objects.filter(city=searched_city)
        return render (request, template_name="searched_animal.html", context={"animals":data, "searched_cat":searched[0], "searched_city":searched[1]})
    else:
        return render (request, template_name="search_animal.html", context={"form":form_search_animal})
    

@login_required   
def edit_animal(request, animal_id):
    animal = Animal.objects.get(id=animal_id)

    if request.method != 'POST':
        form = AddAnimalForm(instance=animal)

    else:
        form = AddAnimalForm(instance=animal, data=request.POST) 
        if form.is_valid():
            form.save()
            return redirect('/myanimals', animal_id=animal.id)

    context = {'animal': animal, 'form': form}
    return render(request, 'edit_animal.html', context)


@login_required
def delete_animal(request, animal_id):
    animal = Animal.objects.get(id=animal_id)
    animal.delete()
    return redirect('/myanimals')


@login_required
def adopt_animal(request, animal_id):
    animal = Animal.objects.get(id=animal_id)
    message_form = AddMessage()
    if request.method == "POST":
        message_form = AddMessage(request.POST)
        message_form.instance.written_by_user = request.user
        message_form.instance.written_to_user = animal.added_by_user
        if message_form.is_valid():
                message_form.save()
            
                return redirect('/my_messages')
   
    return render(request, 'adopt_animal.html', context={'pet': animal, "form":message_form})
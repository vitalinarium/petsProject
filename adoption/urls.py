from django.urls import path

from . import views 


app_name = "adoption"   


urlpatterns = [
    # path("", views.homepage, name="homepage"),
    # path("", views.home, name="home"),  
    # path("index", AnimalView.as_view(), name="front"),
    # path("react", MyAnimalList.as_view(), name="myanimals"), 
    path("animals", views.get_animals, name="animals"),  
    path("addanimal", views.add_animal, name="add_animal"), 
    path("myanimals", views.my_animals, name="my_animals"),
    path("search", views.search_animal, name="search_animal"),
    path('edit_animal/<int:animal_id>/', views.edit_animal, name='edit_animal'),
    path('delete_animal/<int:animal_id>/', views.delete_animal, name='delete_animal'), 
    path('adopt_animal/<int:animal_id>/', views.adopt_animal, name='adopt_animal'),   

]

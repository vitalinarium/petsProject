from django.urls import path
from . import views 

app_name = "adoption"   


urlpatterns = [
    # path("", views.homepage, name="homepage"),
    # path("", views.home, name="home"),   
    path("animals", views.get_animals, name="animals"),  
    path("addanimal", views.add_animal, name="add_animal"), 
    path("myanimals", views.my_animals, name="my_animals"),
    path("search", views.search_animal, name="search_animal"),

    

]

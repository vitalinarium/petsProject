from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import AnimalList, AnimalDetail, UsersAnimalList, AddAnimal, AdminPostDetail, EditAnimal, DeleteAnimal


app_name = "adoption"   
# router = DefaultRouter()
# router.register('', AnimalList, basename='animal')
# urlpatterns = router.urls
urlpatterns = [
    path('pets/<str:pk>/', AnimalDetail.as_view(), name='detailcreate'),
    path('', AnimalList.as_view(), name='listcreate'),
    path('myanimals/', UsersAnimalList.as_view(), name='myanimals'),
    path('addanimal/', AddAnimal.as_view(), name='addanimal'),
    path('edit/animaldetail/<int:pk>/', AdminPostDetail.as_view(), name='adminpostdetail'),
    path('edit/<int:pk>/', EditAnimal.as_view(), name='editanimal'),
    path('delete/<int:pk>/', DeleteAnimal.as_view(), name='deleteanimal'),
    # path("", views.homepage, name="homepage"),
    # path("", views.home, name="home"),  
    # path("index", AnimalView.as_view(), name="front"),
    # path("react", MyAnimalList.as_view(), name="myanimals"), 

    # path("animals", views.get_animals, name="animals"),  
    # path("addanimal", views.add_animal, name="add_animal"), 
    # path("myanimals", views.my_animals, name="my_animals"),
    # path("search", views.search_animal, name="search_animal"),
    # path('edit_animal/<int:animal_id>/', views.edit_animal, name='edit_animal'),
    # path('delete_animal/<int:animal_id>/', views.delete_animal, name='delete_animal'), 
    # path('adopt_animal/<int:animal_id>/', views.adopt_animal, name='adopt_animal'),   

]

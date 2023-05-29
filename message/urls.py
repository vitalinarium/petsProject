from django.urls import path
from . import views 

app_name = "message"   


urlpatterns = [   
    path("my_messages", views.my_messages, name="my_messages"),  
     

]
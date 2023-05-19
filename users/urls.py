from django.urls import path
from . import views

app_name = "users"   


urlpatterns = [
    # path("", views.homepage, name="homepage"),
    path("", views.home, name="home"),    
    path("register", views.register, name="register"),
    path("login", views.log_in, name="login"),
    path("logout", views.log_out, name="logout"),
    

]

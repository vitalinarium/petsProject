"""
URL configuration for petsAdoption project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from adoption.views import AnimalView

from blog.views import BlogView
from rest_framework.authtoken.views import obtain_auth_token


urlpatterns = [
    path('admin/', admin.site.urls),
    path("get_animals/", AnimalView.as_view(), name='get_animals'),
   
    # path("my_animals/", MyAnimalView.as_view(), name='get_myanimals'),
    path("blog/", BlogView.as_view(), name='blog'),
    
    path('', include('adoption.urls')),
    path('', include('blog.urls')),
    path('', include('message.urls')),
    
    path('users/', include("users.urls"))
    # path('api/users/', include('users.urls')),
] +  static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

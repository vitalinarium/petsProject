from django.contrib import admin
from .models import Animal

# Register your models here.

class AnimalAdmin(admin.ModelAdmin):
  
  prepopulated_fields = {"slug": ("name", "category", "date")}
  
admin.site.register(Animal, AnimalAdmin)
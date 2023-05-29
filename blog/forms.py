from django import forms
from .models import BlogPost


# # Create your forms here.
class AddPostForm(forms.ModelForm):
    
    class Meta:
        model = BlogPost        
        fields = ["title", "blog_post"]


    
        


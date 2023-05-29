from django import forms
from .models import PrivateMessage
# from django.contrib.auth.models import User


# # Create your forms here.
class AddMessage(forms.ModelForm):
    
    class Meta:
        model = PrivateMessage        
        fields = ["text_message"]
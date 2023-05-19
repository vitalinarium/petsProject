from django import forms
from django.contrib.auth.forms import UserCreationForm

from django.contrib.auth.models import User


# Create your forms here.
class LoginForm(forms.Form):
    username = forms.CharField(max_length=65)
    password = forms.CharField(max_length=65, widget=forms.PasswordInput)
    

class RegisterForm(UserCreationForm):
	
	city = forms.CharField(max_length=50)
	photo = forms.ImageField(allow_empty_file=True,required=False)

    
	class Meta:
		model = User
		fields = ("username", "email", "password1", "password2", "city", "photo")

	def save(self, commit=True):
		user = super(RegisterForm, self).save(commit=False)
		user.email = self.cleaned_data['email']
		if commit:
			user.save()
		return user
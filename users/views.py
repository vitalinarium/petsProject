from django.shortcuts import  render, redirect, HttpResponse
from .forms import RegisterForm, LoginForm
from django.contrib.auth import authenticate, login, logout

from django.contrib import messages
from django.contrib.auth.decorators import login_required

def register(request):
	form = RegisterForm()
	if request.method == "POST":
		form = RegisterForm(request.POST)
		if form.is_valid():
			user = form.save()
			login(request, user)
			messages.success(request, "Registration successful." )
			return redirect("/")
		messages.error(request, "Unsuccessful registration. Invalid information.")
	
	return render (request=request, template_name="register.html", context={"form":form})

def home(request):
	return render (request=request, template_name="home.html")

def log_in(request):
	form = LoginForm()
	if request.method == 'POST':
		username = request.POST.get('username')
		password = request.POST.get('password')
		user = authenticate(username=username,password=password)
		if user:
			if user.is_active:
				login(request,user)
				return redirect("/")
			else:
				return HttpResponse("Account now active")
		else:
			print("Login Unsuccessful")
			return HttpResponse("Your username and/or password are not correct")
	
	else:
		return render(request,'login.html',context={"form":form})

@login_required
def log_out(request):
	logout(request)
	return redirect("/")
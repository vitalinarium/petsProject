from django.shortcuts import render
from .models import PrivateMessage
from django.contrib.auth.decorators import login_required

# Create your views here.
@login_required
def my_messages(request):
    user_name = request.user
    outcome_messages = PrivateMessage.objects.filter(written_by_user=user_name)
    income_messages = PrivateMessage.objects.filter(written_to_user=user_name)       
    context = {'outcome_messages': outcome_messages, 'income_messages': income_messages}
    return render(request, 'my_messages.html', context)
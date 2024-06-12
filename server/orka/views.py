from django.shortcuts import render
from django.http import HttpResponse, HttpResponseNotFound, HttpResponseRedirect

# Create your views here.

def user(request):
    try:
        from models import User
        return HttpResponse(User.objects.all())
    except:
        return HttpResponseNotFound("User Not Found")

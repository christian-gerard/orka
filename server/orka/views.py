from django.shortcuts import render
from django.http import HttpResponse, HttpResponseNotFound, HttpResponseRedirect

# Create your views here.

def user(request,user_id):
    user_name = None
    try:
        if user_id == 1:
            user_name = 'Bryce Defoe'
        elif user_id == 2:
            user_name = 'Jack Gerard'
        return HttpResponseRedirect(user_name)
    except:
        return HttpResponseNotFound("User Not Found")

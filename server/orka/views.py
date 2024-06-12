from django.shortcuts import render
from django.core.serializers import serialize
from django.http import HttpResponse, HttpResponseNotFound, HttpResponseRedirect
from .models import User, Client, Project, ProductionNeed
import pdb


# Create your views here.

def user(request):
    try:
        users = User.objects.all()
        user_json = serialize('json', users)
        return HttpResponse(user_json, content_type='application/json')
    except: 
        return HttpResponseNotFound("User Not Found")
    
def client(request):
    try:
        clients = Client.objects.all()
        client_json = serialize('json', clients)
        return HttpResponse(client_json, content_type='application/json')
    except:
        return HttpResponseNotFound("Client Not Found")
    

def project(request):
    try:
        projects = Project.objects.all()
        project_json = serialize('json', projects)
        return HttpResponse(project_json, content_type='application/json')
    except:
        return HttpResponseNotFound("Projects Not Found")
    
def productionneed(request):
    try:
        prodneeds = ProductionNeed.objects.all()
        prodneeds_json = serialize('json', prodneeds)
        return HttpResponse(prodneeds_json, content_type='application/json')
    except:
        return HttpResponseNotFound("Projects Not Found")

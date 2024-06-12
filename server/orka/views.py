import json
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.core.serializers import serialize
from django.http import JsonResponse, HttpResponse, HttpResponseNotFound, HttpResponseRedirect
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
    
@csrf_exempt
def project(request):
    try:
        if request.method == 'GET':
            projects = Project.objects.all()
            project_json = serialize('json', projects)
            return HttpResponse(project_json, content_type='application/json')
        elif request.method == 'POST':
            data = json.loads(request.body)
            name = data.get('name')
            deadline = data.get('deadline')
            client_id = data.get('client_id')
            new_project = Project(name = name, deadline = deadline, client_id = client_id)
            new_project.save()
            return HttpResponse('Created Record', status=201)
    except:
        return HttpResponseNotFound("Projects Not Found")

@csrf_exempt
def projectbyid(request,id):
    if request.method == 'DELETE':
        if id is not None:
            try:
                project = Project.objects.get(id=id)
                project.delete()
                return HttpResponse('Project Deleted', status=204)
            except Project.DoesNotExist:
                return HttpResponseNotFound('Project Not Found')
        else:
            return HttpResponse('Bad Request: Missing project_id', status=400)
        
@csrf_exempt    
def productionneed(request):
    try:
        if request.method == 'GET':
            prodneeds = ProductionNeed.objects.all()
            prodneeds_json = serialize('json', prodneeds)
            return HttpResponse(prodneeds_json, content_type='application/json')
        elif request.method == 'POST':
            data = json.loads(request.body)
            description = data.get('description')
            deadline = data.get('deadline')
            note = data.get('note')
            project_id = data.get('project_id')
            new_prodneed = ProductionNeed(
                description = description, 
                deadline = deadline, 
                note = note,
                project_id = project_id
            )
            new_prodneed.save()
            return HttpResponse('Created ProdNeed', status=201)

    except:
        return HttpResponseNotFound("Projects Not Found")

@csrf_exempt
def productionneedbyid(request,id):
    if request.method == 'DELETE':
        if id is not None:
            try:
                prodneed = ProductionNeed.objects.get(id=id)
                prodneed.delete()
                return HttpResponse('Prod Need Deleted', status=204)
            except ProductionNeed.DoesNotExist:
                return HttpResponseNotFound('Prod Need Not Found')
        else:
            return HttpResponse('Bad Request: Missing prodneed', status=400)

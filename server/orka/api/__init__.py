import json
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.core.serializers import serialize
from django.http import JsonResponse, HttpResponse, HttpResponseNotFound, HttpResponseRedirect
import pdb

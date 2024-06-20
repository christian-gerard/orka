from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework import status
from django.http import Http404
from orka.api.serializers.UserSerializer import UserSerializer
from pdb import set_trace


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def login(request):
    return Response({"MESSAGRE": "MESSAGE"})

@api_view(['POST'])
@permission_classes([AllowAny])
def signup(request):

    serializer = UserSerializer(data=request.data)

    if serializer.is_valid():

        return Response("AVALID")
    
    
    return Response(serializer.errors, 401)

@api_view(['POST'])
def signout(request):
    return Response({"MESSAGRE": "MESSAGE"})



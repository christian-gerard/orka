from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework import status
from django.http import Http404
from django.shortcuts import get_object_or_404
from orka.models.Account import Account
from orka.models.User import User
from orka.api.serializers.UserSerializer import UserSerializer
from orka.api.serializers.AccountSerializer import AccountSerializer
from pdb import set_trace


@api_view(['POST'])
@permission_classes([AllowAny])
def login(request):
    user = get_object_or_404(User, username=request.data['username'])

    if not user.check_password(request.data['password']):
        return Response("missing user", status=status.HTTP_404_NOT_FOUND)
    
    token, created = Token.objects.get_or_create(user=user)
    serializer = UserSerializer(user)

    return Response({'token': token.key, 'user': serializer.data})


@api_view(['POST'])
@permission_classes([AllowAny])
def signup(request):

    serializer = UserSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        user = User.objects.get(username=request.data['username'])
        user.set_password(request.data['password'])
        user.save()
        token,created = Token.objects.get_or_create(user=user)

        return Response({"token": token.key, "user": serializer.data})
    
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def signout(request):
    return Response({"MESSAGRE": "MESSAGE"})



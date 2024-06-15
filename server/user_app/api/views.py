from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from django.http import Http404
from user_app.api.serializer import RegistrationSerializer

# Create your views here.

class RegistrationView(APIView):

    def post(self,request):
        serializer = RegistrationSerializer(data=request.data)
        data = { }
        
        if serializer.is_valid():
            account = serializer.save()
            data['response'] = 'Registration Successful'
            data['username'] = account.username
            data['email'] = account.email

            token = Token.objects.get(user=account).key
            data['token'] = token
        else:
            data['error'] = serializer.errors

        return Response(data)


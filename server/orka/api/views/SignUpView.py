from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import Http404
from orka.models.Account import Account
from orka.api.serializers.AccountSerializer import AccountSerializer

class SignupDetail(APIView):

    def get_object(self):
        try:
            return Account.objects.all()
        except Account.DoesNotExist:
            raise Http404

    def get(self, request):
        account = self.get_object()
        serializer = AccountSerializer(account, many=True)
        return Response(serializer.data)
    
    def post(self,request):
        serializer = AccountSerializer(data=request.data)

        if serializer.is_valid():
            project = serializer.save()
            return Response(AccountSerializer(project).data)



        return Response(serializer.errors)
    

class SignUpDetail(APIView):

    def get_object(self, pk):
        try:
            return Account.objects.get(pk=pk)
        except Account.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        account = self.get_object(pk)
        serializer = AccountSerializer(account)
        return Response(serializer.data)
    
    def post(self,request, pk, format=None):
        pass
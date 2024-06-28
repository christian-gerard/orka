from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import Http404
from orka.models.Client import Client
from orka.api.serializers.ClientSerializer import ClientSerializer

class ClientList(APIView):

    def get_object(self):
        try:
            return Client.objects.all()
        except Client.DoesNotExist:
            raise Http404

    def get(self, request):
        client = self.get_object()
        serializer = ClientSerializer(client, many=True)
        return Response(serializer.data)
    
    def post(self,request):
        serializer = ClientSerializer(data=request.data)

        if serializer.is_valid():
            client = serializer.save()
            return Response(ClientSerializer(client).data)

        return Response(serializer.errors,status=404)
    

class ClientDetail(APIView):

    def get_object(self, pk):
        try:
            return Client.objects.get(pk=pk)
        except Client.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        client = self.get_object(pk)
        serializer = ClientSerializer(client)
        return Response(serializer.data)
    
    def delete(self, request, pk, format=None):
        client = self.get_object(pk)
        client.delete()
        return Response('DELETE SUCCESSFUL')
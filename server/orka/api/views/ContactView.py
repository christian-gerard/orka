from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import Http404
from orka.models.Contact import Contact
from orka.api.serializers.ContactSerializer import ContactSerializer

class ContactList(APIView):

    def get_object(self):
        try:
            return Contact.objects.all()
        except Contact.DoesNotExist:
            raise Http404

    def get(self, request):
        contact = self.get_object()
        serializer = ContactSerializer(contact, many=True)
        return Response(serializer.data)
    
    def post(self,request):
        serializer = ContactSerializer(data=request.data)

        if serializer.is_valid():
            contact = serializer.save()
            return Response(ContactSerializer(contact).data)

        return Response(serializer.errors,status=404)
    

class ContactDetail(APIView):

    def get_object(self, pk):
        try:
            return Contact.objects.get(pk=pk)
        except Contact.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        contact = self.get_object(pk)
        serializer = ContactSerializer(contact)
        return Response(serializer.data)
    
    def delete(self, request, pk, format=None):
        Contact = self.get_object(pk)
        Contact.delete()
        return Response('DELETE SUCCESSFUL')
from rest_framework import serializers
from orka.models.Contact import Contact
from orka.models.Client import Client
from orka.api.serializers.ClientSerializer import ClientSerializer

class ContactSerializer(serializers.ModelSerializer):
    
    clients = ClientSerializer(many=True, read_only=True)

    class Meta:
        model = Contact
        fields = '__all__'
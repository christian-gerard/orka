from rest_framework import serializers
from orka.models.Client import Client
from orka.models.Account import Account

class ClientSerializer(serializers.ModelSerializer):

    class Meta:
        model = Client
        fields = '__all__'

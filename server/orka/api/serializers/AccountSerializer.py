from rest_framework import serializers
from orka.models.Account import Account
from orka.api.serializers.ClientSerializer import ClientSerializer

class AccountSerializer(serializers.ModelSerializer):


    class Meta:
        model = Account
        fields = '__all__'


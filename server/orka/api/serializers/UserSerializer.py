from rest_framework import serializers
from orka.models.User import User
from orka.models.Account import Account
from orka.api.serializers.AccountSerializer import AccountSerializer

class UserSerializer(serializers.ModelSerializer):
    account = AccountSerializer(Account.objects.get(id=1))
    
    class Meta:
        model = User
        fields = '__all__'

 
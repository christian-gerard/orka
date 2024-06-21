from rest_framework import serializers
from orka.models.User import User
from orka.models.Account import Account
from orka.api.serializers.AccountSerializer import AccountSerializer

class UserSerializer(serializers.ModelSerializer):
    account = serializers.PrimaryKeyRelatedField(queryset=Account.objects.all(), write_only=True)
    account_details = AccountSerializer(source='account', read_only=True)
    
    class Meta:
        model = User
        fields = ['username','email','password','account','account_details']


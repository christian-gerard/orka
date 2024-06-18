from rest_framework import serializers
from orka.models.User import User
from orka.models.Account import Account
from orka.api.serializers.AccountSerializer import AccountSerializer

class UserSerializer(serializers.ModelSerializer):
    account = AccountSerializer()
    
    class Meta:
        model = User
        fields = '__all__'

    id = serializers.IntegerField(read_only=True)
    email = serializers.CharField()
    password = serializers.CharField()
    admin = serializers.BooleanField()
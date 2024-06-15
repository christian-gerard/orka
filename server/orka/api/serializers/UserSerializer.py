from rest_framework import serializers
from orka.api.serializers.ClientSerializer import ClientSerializer
from orka.models.User import User
from orka.models.Account import Account

class UserSerializer(serializers.ModelSerializer):
    account = serializers.PrimaryKeyRelatedField(queryset=Account.objects.all())
    clients = ClientSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = '__all__'

    id = serializers.IntegerField(read_only=True)
    email = serializers.CharField()
    password = serializers.CharField()
    admin = serializers.BooleanField()
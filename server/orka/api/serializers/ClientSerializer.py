from rest_framework import serializers
from orka.models.Client import Client
from orka.models.Account import Account

class ClientSerializer(serializers.ModelSerializer):
    account = serializers.PrimaryKeyRelatedField(queryset=Account.objects.all())

    class Meta:
        model = Client
        fields = '__all__'

    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    logo = serializers.CharField()
    isActive = serializers.BooleanField()
    created_at = serializers.DateTimeField()
    updated_at = serializers.DateTimeField()
    type = serializers.CharField()
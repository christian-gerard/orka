from rest_framework import serializers
from orka.models.Project import Project
from orka.models.Client import Client

class ProjectSerializer(serializers.ModelSerializer):
    client = serializers.PrimaryKeyRelatedField(queryset=Client.objects.all())

    class Meta:
        model = Project
        fields = '__all__'

    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    deadline = serializers.DateTimeField()
    created_at = serializers.DateTimeField()
    updated_at = serializers.DateTimeField()
    type = serializers.CharField()
    
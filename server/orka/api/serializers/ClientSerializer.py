from rest_framework import serializers
from orka.models.Client import Client
from orka.models.Project import Project
from orka.api.serializers.ProjectSerializer import ProjectSerializer

class ClientSerializer(serializers.ModelSerializer):
    
    projects = ProjectSerializer(many=True, read_only=True)

    class Meta:
        model = Client
        fields = '__all__'

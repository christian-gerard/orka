from rest_framework import serializers
from orka.models.Project import Project
from orka.api.serializers.TaskSerializer import TaskSerializer
from orka.api.serializers.ExpenseSerializer import ExpenseSerializer

class ProjectSerializer(serializers.ModelSerializer):
    expenses = ExpenseSerializer(many=True, read_only=True)
    prod_needs = TaskSerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = '__all__'

    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    deadline = serializers.DateField(required=False)
    status = serializers.CharField(required=False, default='Not Started')
    type = serializers.CharField(required=False, default='Ad Campaign')
    
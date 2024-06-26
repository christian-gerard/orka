from rest_framework import serializers
from orka.models.Project import Project
from orka.api.serializers.ProductionNeedSerializer import ProductionNeedSerializer
from orka.api.serializers.BudgetItemSerializer import BudgetItemSerializer

class ProjectSerializer(serializers.ModelSerializer):
    budg_items = BudgetItemSerializer(many=True, read_only=True)
    prod_needs = ProductionNeedSerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = '__all__'

    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    deadline = serializers.DateField(required=False)
    status = serializers.CharField(required=False, default='Not Started')
    type = serializers.CharField(required=False, default='Ad Campaign')
    
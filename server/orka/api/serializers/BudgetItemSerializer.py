from rest_framework import serializers
from orka.models.BudgetItem import BudgetItem


class BudgetItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = BudgetItem
        fields = '__all__'
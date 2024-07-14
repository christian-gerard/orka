from rest_framework import serializers
from orka.models.Expense import Expense


class ExpenseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Expense
        fields = '__all__'
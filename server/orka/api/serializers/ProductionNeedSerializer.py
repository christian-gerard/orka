from rest_framework import serializers
from orka.models.ProductionNeed import ProductionNeed


class ProductionNeedSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductionNeed
        fields = '__all__'


from rest_framework import serializers
from orka.models.ProductionNeed import ProductionNeed
from orka.models.User import User
from orka.models.UserProductionneed import UserProductionNeed

class UserProductioneedSerializer(serializers.ModelSerializer):
    productionneed = serializers.PrimaryKeyRelatedField(queryset=ProductionNeed.objects.all())
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())

    class Meta:
        model = UserProductionNeed
        fields = '__all__'

    id = serializers.IntegerField(read_only=True)
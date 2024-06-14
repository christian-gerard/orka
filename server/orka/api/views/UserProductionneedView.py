from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import Http404
from orka.models.UserProductionneed import UserProductionNeed
from orka.api.serializers.UserProductionneedSerializer import UserProductioneedSerializer

class UserProductioneedList(APIView):

    def get_object(self):
        try:
            return UserProductionNeed.objects.all()
        except UserProductionNeed.DoesNotExist:
            raise Http404

    def get(self, request):
        client = self.get_object()
        serializer = UserProductioneedSerializer(client, many=True)
        return Response(serializer.data)
    

class UserProductioneedDetail(APIView):

    def get_object(self, pk):
        try:
            return UserProductionNeed.objects.get(pk=pk)
        except UserProductionNeed.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        user_prod_need = self.get_object(pk)
        serializer = UserProductioneedSerializer(user_prod_need)
        return Response(serializer.data)
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import Http404
from orka.models.ProductionNeed import ProductionNeed
from orka.api.serializers.ProductionNeedSerializer import ProductionNeedSerializer

class ProductionNeedList(APIView):

    def get_object(self):
        try:
            return ProductionNeed.objects.all()
        except ProductionNeed.DoesNotExist:
            raise Http404

    def get(self, request):
        production_need = self.get_object()
        serializer = ProductionNeedSerializer(production_need, many=True)
        return Response(serializer.data)
    
    def post(self,request):
        serializer = ProductionNeedSerializer(data=request.data)

        if serializer.is_valid():
            production_need = serializer.save()
            return Response(ProductionNeedSerializer(production_need).data)

        return Response(serializer.errors,status=404)
    

class ProductionNeedDetail(APIView):

    def get_object(self, pk):
        try:
            return ProductionNeed.objects.get(pk=pk)
        except ProductionNeed.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        production_need = self.get_object(pk)
        serializer = ProductionNeedSerializer(production_need)
        return Response(serializer.data)
    
    def delete(self, request, pk, format=None):
        production_need = self.get_object(pk)
        production_need.delete()
        return Response('DELETE SUCCESSFUL')
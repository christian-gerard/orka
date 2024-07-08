from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import Http404
from orka.models.BudgetItem import BudgetItem
from orka.api.serializers.BudgetItemSerializer import BudgetItemSerializer

class BudgetItemList(APIView):

    def get_object(self):
        try:
            return BudgetItem.objects.all()
        except BudgetItem.DoesNotExist:
            raise Http404

    def get(self, request):
        budget_item = self.get_object()
        serializer = BudgetItemSerializer(budget_item, many=True)
        return Response(serializer.data)
    
    def post(self,request):
        serializer = BudgetItemSerializer(data=request.data)

        if serializer.is_valid():
            budget_item = serializer.save()
            return Response(BudgetItemSerializer(budget_item).data)

        return Response(serializer.errors,status=404)
    

class BudgetItemDetail(APIView):

    def get_object(self, pk):
        try:
            return BudgetItem.objects.get(pk=pk)
        except BudgetItem.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        budget_item = self.get_object(pk)
        serializer = BudgetItemSerializer(budget_item)
        return Response(serializer.data)
    
    def delete(self, request, pk, format=None):
        budget_item = self.get_object(pk)
        budget_item.delete()
        return Response('DELETE SUCCESSFUL')
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import Http404
from orka.models.Expense import Expense
from orka.api.serializers.ExpenseSerializer import ExpenseSerializer

class ExpenseList(APIView):

    def get_object(self):
        try:
            return Expense.objects.all()
        except Expense.DoesNotExist:
            raise Http404

    def get(self, request):
        budget_item = self.get_object()
        serializer = ExpenseSerializer(budget_item, many=True)
        return Response(serializer.data)
    
    def post(self,request):
        serializer = ExpenseSerializer(data=request.data)

        if serializer.is_valid():
            budget_item = serializer.save()
            return Response(ExpenseSerializer(budget_item).data)

        return Response(serializer.errors,status=404)
    

class ExpenseDetail(APIView):

    def get_object(self, pk):
        try:
            return Expense.objects.get(pk=pk)
        except Expense.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        budget_item = self.get_object(pk)
        serializer = ExpenseSerializer(budget_item)
        return Response(serializer.data)
    
    def delete(self, request, pk, format=None):
        budget_item = self.get_object(pk)
        budget_item.delete()
        return Response('DELETE SUCCESSFUL')
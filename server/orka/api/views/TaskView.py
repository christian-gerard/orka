from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import Http404
from orka.models.Task import Task
from orka.api.serializers.TaskSerializer import TaskSerializer

class TaskList(APIView):

    def get_object(self):
        try:
            return Task.objects.all()
        except Task.DoesNotExist:
            raise Http404

    def get(self, request):
        production_need = self.get_object()
        serializer = TaskSerializer(production_need, many=True)
        return Response(serializer.data)
    
    def post(self,request):
        serializer = TaskSerializer(data=request.data)

        if serializer.is_valid():
            production_need = serializer.save()
            return Response(TaskSerializer(production_need).data)

        return Response(serializer.errors,status=404)
    

class TaskDetail(APIView):

    def get_object(self, pk):
        try:
            return Task.objects.get(pk=pk)
        except Task.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        production_need = self.get_object(pk)
        serializer = TaskSerializer(production_need)
        return Response(serializer.data)
    
    def delete(self, request, pk, format=None):
        production_need = self.get_object(pk)
        production_need.delete()
        return Response('DELETE SUCCESSFUL')
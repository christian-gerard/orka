from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import Http404
from orka.models.Project import Project
from orka.api.serializers.ProjectSerializer import ProjectSerializer
from pdb import set_trace

class ProjectList(APIView):

    def get_object(self):
        try:
            return Project.objects.all()
        except Project.DoesNotExist:
            raise Http404

    def get(self, request):
        project = self.get_object()
        serializer = ProjectSerializer(project, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = ProjectSerializer(data=request.data)

        if serializer.is_valid():
            project = serializer.save()
            return Response(ProjectSerializer(project).data)



        return Response(serializer.errors)
    

class ProjectDetail(APIView):

    def get_object(self, pk):
        try:
            return Project.objects.get(pk=pk)
        except Project.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        project = self.get_object(pk)
        serializer = ProjectSerializer(project)
        return Response(serializer.data)
    
    def delete(self, request, pk, format=None):
        project = self.get_object(pk)
        project.delete()
        return Response('DELETE SUCCESSFUL')
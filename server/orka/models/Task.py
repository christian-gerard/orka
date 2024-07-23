from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from orka.models.Project import Project
from django.utils.timezone import now

class Task(models.Model):
    
    project = models.ForeignKey(Project, related_name='tasks', on_delete=models.CASCADE)

    description = models.CharField(max_length=100)
    deadline = models.DateTimeField(default=now, blank=True)
    status = models.CharField(max_length=100, blank=True)
    note = models.CharField(max_length=1000)
    type = models.CharField(max_length=20, blank=True)


    def __str__(self):
        return self.description
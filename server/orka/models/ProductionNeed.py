from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from orka.models.Project import Project
from django.utils.timezone import now

class ProductionNeed(models.Model):
    description = models.CharField(max_length=100)
    deadline = models.DateTimeField(default=now, blank=True)
    note = models.CharField(max_length=1000)
    type = models.CharField(max_length=20, blank=True)

    project = models.ForeignKey(Project, on_delete=models.CASCADE)

    def __str__(self):
        return self.description
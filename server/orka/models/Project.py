from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from orka.models.Client import Client
from django.utils.timezone import now
from datetime import date


class Project(models.Model):

    client = models.ForeignKey(Client, related_name='projects', on_delete=models.CASCADE)

    name = models.CharField(max_length=100)
    deadline = models.DateField(default=date.today, blank=True)
    type = models.CharField(max_length=30)
    status = models.CharField(max_length=30)

    def __str__(self):
        return f"{self.name} || {self.deadline} + {self.type}"
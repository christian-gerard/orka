from django.db import models
from  django.core.exceptions import ValidationError
from django.core.validators import MinValueValidator, MaxValueValidator
from orka.models.Client import Client
from django.utils.timezone import now
from datetime import date

class Project(models.Model):

    client = models.ForeignKey(Client, related_name='projects', on_delete=models.CASCADE)

    name = models.CharField(max_length=100)

    deadline = models.DateField(
        default=date.today, 
        blank=True
    )

    type = models.CharField(max_length=30, default='Ad Campaign')

    status = models.CharField(max_length=30, default='Not Started')

    budget=models.FloatField(default=0.00)

    def __str__(self):
        return f"{self.name} || {self.deadline} + {self.type} + {self.client}"
    



    

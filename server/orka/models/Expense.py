from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from orka.models.Project import Project
from django.utils.timezone import now

class Expense(models.Model):

    project = models.ForeignKey(Project, related_name='expenses', on_delete=models.CASCADE)

    description = models.CharField(max_length=300, blank=True)
    amount = models.IntegerField()
    note = models.CharField(max_length=100)
    type = models.CharField(max_length=100)
    status = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return f"{self.description} <> ${self.amount}"
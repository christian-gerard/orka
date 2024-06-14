from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from orka.models.Project import Project
from django.utils.timezone import now

class BudgetItem(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=300, blank=True)
    amount = models.IntegerField()
    note = models.CharField(max_length=100)
    type = models.CharField(max_length=100)
    deadline = models.DateTimeField(default=now, blank=True)
    created_at = models.DateTimeField(default=now, blank=True)
    updated_at = models.DateTimeField(default=now, blank=True)

    project = models.ForeignKey(Project, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.name} <> ${self.amount}"
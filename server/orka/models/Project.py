from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from orka.models.Client import Client
from django.utils.timezone import now


class Project(models.Model):
    name = models.CharField(max_length=100)
    deadline = models.DateTimeField(default=now, blank=True)
    created_at = models.DateTimeField(default=now, blank=True)
    updated_at = models.DateTimeField(default=now, blank=True)

    type = models.CharField(max_length=20, blank=True)


    client = models.ForeignKey(Client, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
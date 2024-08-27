from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from orka.models.Client import Client
from django.utils.timezone import now

class Contact(models.Model):

    Client = models.ForeignKey(Client, default=1, related_name='contacts', on_delete=models.CASCADE)
    first_name = models.CharField(max_length=30, blank=True)
    last_name = models.CharField(max_length=30, blank=True)
    email = models.EmailField(max_length=100, blank=True)
    phone_number = models.IntegerField(blank=True)
    description = models.CharField(max_length=30, blank=True)
    position = models.CharField(max_length=20, blank=True)
    poc = models.BooleanField(default=False)
    
    def __str__(self):
        return f"{self.first_name} {self.last_name} || {self.position}"
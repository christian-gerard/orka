from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from orka.models.Account import Account
from django.utils.timezone import now

class Client(models.Model):

    account = models.ForeignKey(Account, default=1, related_name='clients', on_delete=models.CASCADE)

    name = models.CharField(max_length=100)
    client_img = models.BinaryField(blank=True)
    type = models.CharField(max_length=20, blank=True)
    isActive = models.BooleanField(default=True)
    
    def __str__(self):
        return f"{self.name} || {self.type} + {self.isActive}"
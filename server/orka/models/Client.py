from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from orka.models.Account import Account
from django.utils.timezone import now

class Client(models.Model):
    name = models.CharField(max_length=100)
    logo = models.BinaryField(blank=True)
    type = models.CharField(max_length=20, blank=True)
    isActive = models.BooleanField(default=True)
    created_at = models.DateTimeField(default=now, blank=True)
    updated_at = models.DateTimeField(default=now, blank=True)

    account = models.ForeignKey(Account, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.name}"
from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from orka.models.Account import Account


class User(models.Model):
    email = models.CharField(
        max_length=200
    )
    password = models.CharField(
        max_length=20
    )
    admin = models.BooleanField()

    account = models.ForeignKey(Account, on_delete=models.CASCADE)

    def __str__(self):
        return self.email
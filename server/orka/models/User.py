from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import MinValueValidator, MaxValueValidator
from orka.models.Account import Account


class User(AbstractUser):
    email = models.EmailField(
        max_length=200,
        unique=True
    )

    password = models.CharField(
        max_length=200
    )

    admin = models.BooleanField(default=False)

    account = models.ForeignKey(Account, on_delete=models.CASCADE)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'account'] 
    
    def __str__(self):
        return self.email + self.account
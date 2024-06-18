from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import MinValueValidator, MaxValueValidator
from orka.models.Account import Account


class User(AbstractUser):
    email = models.EmailField(
        default='email@email.com',
        max_length=200,
        unique=True
    )

    USERNAME_FIELD = 'email'

    password = models.CharField(
        max_length=20
    )
    admin = models.BooleanField(default=False)

    account = models.ForeignKey(Account, default=1, on_delete=models.CASCADE)

    REQUIRED_FIELDS = ['username'] 
    
    def __str__(self):
        return self.email
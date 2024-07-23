from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from orka.models.Account import Account
from django.utils.timezone import now

class Client(models.Model):

    account = models.ForeignKey(Account, default=1, related_name='clients', on_delete=models.CASCADE)

    name = models.CharField(max_length=100)
    ein = models.IntegerField(default=999999999)
    address_first = models.CharField(max_length=100, blank=True)
    address_second = models.CharField(max_length=100, blank=True)
    city = models.CharField(max_length=100, blank=True)
    state = models.CharField(max_length=100, blank=True)
    zip_code = models.CharField(max_length=100, blank=True)
    country = models.CharField(max_length=100, blank=True)
    type = models.CharField(max_length=20, blank=True)

    
    def __str__(self):
        return f"{self.name} || {self.type}"
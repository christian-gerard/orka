from django.db import models
from django.utils.timezone import now


class Account(models.Model):
    name = models.CharField(max_length=100)
    logo = models.BinaryField(blank=True)
    type = models.CharField(default='Advertising',max_length=20)


    def __str__(self):
        return f"{self.name}"
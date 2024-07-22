from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from server.orka.models.Task import ProductionNeed
from orka.models.User import User
from datetime import datetime

class UserProductionNeed(models.Model):

    productionneed = models.ForeignKey(ProductionNeed, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return f"For {self.user.id}"
from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from datetime import timezone

# Create your models here.

class Account(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.name}"

class User(models.Model):
    email = models.CharField(
        max_length=200
    )
    password = models.CharField(
        max_length=20
    )
    admin = models.IntegerField(0)

    account = models.ForeignKey(Account, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.username} email:{self.email}"
    
class Client(models.Model):
    name = models.CharField(max_length=100)
    account = models.ForeignKey(Account, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.name}"
    
    
class Project(models.Model):
    name = models.CharField(max_length=100)
    deadline = models.DateField()

    client = models.ForeignKey(Client, on_delete=models.CASCADE)

    def __str__(self):
        return f""
    
class ProductionNeed(models.Model):
    description = models.CharField(max_length=100)
    deadline = models.DateField()
    note = models.CharField(max_length=1000)

    project = models.ForeignKey(Project, on_delete=models.CASCADE)

    def __str__(self):
        return f""
    
class BudgetItem(models.Model):
    name = models.CharField(max_length=100)
    amount = models.IntegerField()
    note = models.CharField(max_length=100)
    type = models.CharField(max_length=100)

    project = models.ForeignKey(Project, on_delete=models.CASCADE)

    def __str__(self):
        return f""
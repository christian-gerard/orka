from django.contrib import admin
from orka.models.User import User
from orka.models.Account import Account
from orka.models.Client import Client
from orka.models.Project import Project
from orka.models.ProductionNeed import ProductionNeed
from orka.models.BudgetItem import BudgetItem
from orka.models.UserProductionneed import UserProductionNeed

# Register your models here.

admin.site.register(User)
admin.site.register(Account)
admin.site.register(Client)
admin.site.register(Project)
admin.site.register(ProductionNeed)
admin.site.register(BudgetItem)
admin.site.register(UserProductionNeed)

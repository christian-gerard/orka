from django.contrib import admin
from orka.models.User import User
from orka.models.Account import Account
from orka.models.Client import Client
from orka.models.Project import Project
from orka.models.Task import Task
from orka.models.Expense import Expense
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from orka.forms import UserChangeForm, UserCreationForm
from orka.models.User import User

class CustomUserAdmin(UserAdmin):
    add_form = UserCreationForm
    form = UserChangeForm
    model = User
    list_display = ["email", "account_id", "admin" ]

admin.site.register(User, CustomUserAdmin)

# Register your models here.
admin.site.register(Account)
admin.site.register(Client)
admin.site.register(Project)
admin.site.register(Task)
admin.site.register(Expense)

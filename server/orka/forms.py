from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from orka.models.User import User

class UserCreationForm(UserCreationForm):

    class Meta:
        model = User
        fields = ("email", "admin", "account")

class UserChangeForm(UserChangeForm):

    class Meta:
        model = User
        fields = ("username", "email")

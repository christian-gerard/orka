from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token
from user_app.api.views import RegistrationView, LogoutView

urlpatterns = [
    path('login/', RegistrationView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
]
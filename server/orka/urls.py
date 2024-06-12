from django.urls import path
from . import views

urlpatterns = [
    path("user", views.user),
    path("client", views.client),
    path("project", views.project),
    path("productionneed", views.productionneed)
]
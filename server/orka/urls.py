from django.urls import path
from . import views

urlpatterns = [
    path("user", views.user),
    path("client", views.client),
    path("project", views.project),
    path("project/<int:id>/", views.projectbyid),
    path("productionneed", views.productionneed),
    path("productionneed/<int:id>/", views.productionneedbyid)
]
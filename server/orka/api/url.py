from django.urls import path
from orka.api.views.UserView import UserDetail, UserList
from orka.api.views.ProjectView import ProjectList, ProjectDetail
from orka.api.views.ClientView import ClientList, ClientDetail
from orka.api.views.UserProductionneedView import UserProductioneedList, UserProductioneedDetail

urlpatterns = [
    path("user/", UserList.as_view()),
    path("user/<int:pk>/", UserDetail.as_view()),
    path("project/", ProjectList.as_view()),
    path("project/<int:pk>", ProjectDetail.as_view()),
    path("client/", ClientList.as_view()),
    path("client/<int:pk>/", ClientDetail.as_view()),
    path("userproductionneed/", UserProductioneedList.as_view()),
    path("userproductionneed/<int:pk>/", UserProductioneedDetail.as_view()),
    

]
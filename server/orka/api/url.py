from django.urls import path
from orka.api.views.UserView import UserDetail, UserList
from orka.api.views.ProjectView import ProjectList, ProjectDetail
from orka.api.views.ClientView import ClientList, ClientDetail
from orka.api.views.AccountView import AccountDetail
from orka.api.views.TaskView import TaskList, TaskDetail
from orka.api.views.ExpenseView import ExpenseDetail, ExpenseList
from orka.api.views.ContactView import ContactList

urlpatterns = [
    path("user/", UserList.as_view()),
    path("user/<int:pk>/", UserDetail.as_view()),
    path("account/<int:pk>", AccountDetail.as_view()),
    path("project/", ProjectList.as_view()),
    path("project/<int:pk>", ProjectDetail.as_view()),
    path("client/", ClientList.as_view()),
    path("client/<int:pk>/", ClientDetail.as_view()),
    path("task/", TaskList.as_view()),
    path("task/<int:pk>/", TaskDetail.as_view()),
    path("expense/", ExpenseList.as_view()),
    path("contact/", ContactList.as_view())

]
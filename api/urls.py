from django.urls import path
from . import views

urlpatterns = [
    path('contact/', views.ContactResponseView.as_view() ),
    path('email_list/', views.EmailListResponseView.as_view() ),
]

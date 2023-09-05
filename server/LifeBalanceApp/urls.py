# In LifeBalanceApp/urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet  # Ensure this import is correct

router = DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

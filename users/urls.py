from django.urls import path
from .views import CustomUserCreate, BlacklistTokenUpdateView

from rest_framework_simplejwt.views import (
    TokenRefreshView
)

urlpatterns = [
    path('register/', CustomUserCreate.as_view(), name="create_user"),
    path('logout/blacklist/', BlacklistTokenUpdateView.as_view(), name="blacklist"),
    # path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # path('register/', views.RegisterView.as_view(), name='auth_register'),
    # path('', views.getRoutes),
    # path('test',views.testEndPoint)
]
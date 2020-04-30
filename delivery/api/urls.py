from django.urls import path
from api import views
from rest_framework_jwt.views import obtain_jwt_token
urlpatterns = [
    path('cats/', views.categories),
    path('products/category/', views.category),

    path('products/', views.Products.as_view()),
    path('products/<int:id>/', views.product_detailed),
    path('login/', obtain_jwt_token),

    path('order/', views.order),
    path('products/admin/', views.ProductAdmin.as_view()),
    path('products/admin/<int:id>/', views.deleteProduct),
]
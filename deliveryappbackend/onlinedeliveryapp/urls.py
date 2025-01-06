from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),  # Define the route for the home page
    path('login/', views.login_view, name='login'),
    path('register/', views.register_view, name='register'),
    path('products/', views.product_list, name='product_list'),
    path('order-history/', views.order_history, name='order_history'),
    path('add-product/', views.add_product, name='add_product'),
]

from django.contrib import admin
from .models import CustomUser, Product, Category, Order, Payment

admin.site.register(CustomUser)
admin.site.register(Product)
admin.site.register(Category)
admin.site.register(Order)
admin.site.register(Payment)

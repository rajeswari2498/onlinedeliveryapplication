from django.db import models

from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    ADMIN = 'admin'
    VENDOR = 'vendor'
    DELIVERY_PERSONNEL = 'delivery_personnel'
    CUSTOMER = 'customer'
    
    ROLE_CHOICES = [
        (ADMIN, 'Admin'),
        (VENDOR, 'Vendor'),
        (DELIVERY_PERSONNEL, 'Delivery Personnel'),
        (CUSTOMER, 'Customer'),
    ]
    
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default=CUSTOMER)

    # Add related_name to avoid the conflict
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='customuser_set',
        blank=True,
        help_text='The groups this user belongs to.',
        related_query_name='user'
    )
    
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='customuser_permissions',
        blank=True,
        help_text='Specific permissions for this user.',
        related_query_name='user'
    )
# Product category model
class Category(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name

# Product model
class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    availability_status = models.BooleanField(default=True)
    category = models.ForeignKey(Category, related_name='products', on_delete=models.CASCADE)
    vendor = models.ForeignKey(CustomUser, related_name='products', on_delete=models.CASCADE)

    def __str__(self):
        return self.name

# Order model
class Order(models.Model):
    PENDING = 'pending'
    PROCESSING = 'processing'
    SHIPPED = 'shipped'
    OUT_FOR_DELIVERY = 'out_for_delivery'
    DELIVERED = 'delivered'
    CANCELED = 'canceled'
    
    STATUS_CHOICES = [
        (PENDING, 'Pending'),
        (PROCESSING, 'Processing'),
        (SHIPPED, 'Shipped'),
        (OUT_FOR_DELIVERY, 'Out for Delivery'),
        (DELIVERED, 'Delivered'),
        (CANCELED, 'Canceled'),
    ]

    customer = models.ForeignKey(CustomUser, related_name='orders', on_delete=models.CASCADE)
    product = models.ForeignKey(Product, related_name='orders', on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    order_date = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default=PENDING)

    def __str__(self):
        return f"Order {self.id} by {self.customer.username}"

# Payment model
class Payment(models.Model):
    order = models.OneToOneField(Order, related_name='payment', on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    payment_date = models.DateTimeField(auto_now_add=True)
    successful = models.BooleanField(default=False)
    
    def __str__(self):
        return f"Payment for Order {self.order.id}"

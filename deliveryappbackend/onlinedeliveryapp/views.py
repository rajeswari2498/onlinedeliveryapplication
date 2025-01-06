from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.forms import UserCreationForm
from .models import Product, Order
from django.http import HttpResponse


# views.py
def home(request):
    return render(request, 'home.html')  # Ensure you have a home.html template in your templates folder

# User Authentication Views
def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('product_list.html')
        else:
            return render(request, 'login.html', {'error': 'Invalid credentials'})
    return render(request, 'login.html')

def register_view(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login.html')
    else:
        form = UserCreationForm()
    return render(request, 'register.html', {'form': form})

# Product List View
def product_list(request):
    products = Product.objects.all()
    return render(request, 'product_list.html', {'products': products})

# Order History View
def order_history(request):
    if request.user.is_authenticated:
        orders = Order.objects.filter(customer=request.user)
        return render(request, 'order_history.html', {'orders': orders})
    else:
        return redirect('login.html')

# Add Product (Vendor Only)
def add_product(request):
    if request.user.role == 'vendor':
        if request.method == 'POST':
            name = request.POST['name']
            description = request.POST['description']
            price = request.POST['price']
            category_id = request.POST['category']
            category = Category.objects.get(id=category_id)
            product = Product(name=name, description=description, price=price, category=category, vendor=request.user)
            product.save()
            return redirect('product_list')
        categories = Category.objects.all()
        return render(request, 'add_product.html', {'categories': categories})
    return HttpResponse('Unauthorized', status=403)

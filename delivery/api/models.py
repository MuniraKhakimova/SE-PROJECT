from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=125)


class Product(models.Model):
    name = models.CharField(max_length=125)
    imageURL = models.CharField(max_length=125)
    description = models.CharField(max_length=1250)
    price = models.FloatField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE, blank=True, null=True)


class Order(models.Model):
    name = models.CharField(max_length=125)
    phone = models.CharField(max_length=125)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, blank=True, null=True)


class Manager(models.Model):
    username = models.CharField(max_length=2222)
    password = models.CharField(max_length=2222)

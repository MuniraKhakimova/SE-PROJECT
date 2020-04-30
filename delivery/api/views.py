from django.shortcuts import render

from api.models import Category, Product, Order
from api.serializers import CategorySerializer, ProductSerializer, OrderSerializer

from rest_framework.decorators import api_view
from rest_framework.views import APIView

from django.http.response import JsonResponse


@api_view(['GET'])
def categories(request):
    return JsonResponse(CategorySerializer(Category.objects.all(), many=True).data, safe=False)


@api_view(['GET'])
def product_detailed(request, id):
    return JsonResponse(ProductSerializer(Product.objects.get(id=id)).data, safe=False)


@api_view(['POST'])
def category(request):
    category = Category.objects.get(name=request.data['name'])
    serializer = ProductSerializer(category.product_set.all(), many=True)
    return JsonResponse(serializer.data, safe=False)


class Products(APIView):
    def get(self, request):
        return JsonResponse(ProductSerializer(Product.objects.all(), many=True).data, safe=False)


class ProductAdmin(APIView):
    def post(self, request):
        category = Category.objects.get(name=request.data['category'])
        Product.objects.create(
            category=category,
            name=request.data['name'],
            imageURL=request.data['image'],
            description=request.data['description'],
            price=request.data['price']
        )
        return JsonResponse({"": "product Created"}, safe=False)

    def put(self, request):
        category = Category.objects.get(name=request.data['category'])
        product = Product.objects.get(id=request.data.get('id'))
        product.category = category
        product.name = request.data.get('name')
        product.description = request.data.get('description')
        product.imageURL = request.data.get('image')
        product.price = request.data.get('price')
        product.save()
        return JsonResponse({"": "update"}, safe=False)


@api_view(['DELETE'])
def deleteProduct(request, id):
    product = Product.objects.get(id=id)
    product.delete()
    return JsonResponse({"": "removed"}, safe=False)


@api_view(['GET', 'POST'])
def order(request):
    if request.method == 'GET':
        return JsonResponse(OrderSerializer(Order.objects.all(), many=True).data, safe=False)

    elif request.method == 'POST':
        product = Product.objects.get(id=request.data['product'])
        Order.objects.create(
            name=request.data['name'],
            phone=request.data['phone'],
            product=product
        )
        return JsonResponse({"": "order created"}, safe=False)


@api_view(['DELETE'])
def order_delete(request, id):
    product = Product.objects.get(id=id)
    product.delete()
    return JsonResponse({"": "order deleted"}, safe=False)

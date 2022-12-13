from django.shortcuts import get_object_or_404
from django.utils import timezone
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.pagination import PageNumberPagination
# Create your views here.
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from app.serializers import UserSerializer, GroupSerializer, ProductsSerializer, CategoriesSerializer, PromotionSerializer, BlogSerializer, ColectFilterPriceSerializer, CollectSizeSerializer, ColorSerializer, ProfileSerializer, OrderSerializer, OrderItemSerializer, ProductDetailSerializer, CategoriesDetailSerializer, CouponSerializer, ViewsSerializer

from .models import Categories, Products, Promotion, Blogs, ColectFilterPrice, CollectSize, Color, Profile, Order, Coupon, Views


class UserViewSet(viewsets.ModelViewSet):
	queryset = User.objects.all().order_by('-date_joined')
	serializer_class = UserSerializer
	permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
	queryset = Group.objects.all()
	serializer_class = GroupSerializer
	permission_classes = [permissions.IsAuthenticated]

class CategoriesViewSet(viewsets.ModelViewSet):
	queryset = Categories.objects.all()
	serializer_class = CategoriesSerializer

	def retrieve(self, request, pk=None):
		queryset = Categories.objects.all()
		category = get_object_or_404(queryset, slug=pk)
		serializer = CategoriesDetailSerializer(category, context={'request': request})
		return Response(serializer.data)


class StandardResultsSetPagination(PageNumberPagination):
	page_size = 50
    # page_size_query_param = 'page_size'
    # max_page_size = 1000

	def get_next_page(self):
		if not self.page.has_next():
				return None
		return self.page.next_page_number()

	def get_previous_page(self):
		if not self.page.has_previous():
				return None
		return self.page.previous_page_number()

	def get_paginated_response(self, data):
		return Response({
				'next': self.get_next_page(),
				'previous': self.get_previous_page(),
				'current': self.page.number,
				'total': self.page.paginator.num_pages,
				'count': self.page.paginator.count,
				'results': data
		})


class ProductsViewSet(viewsets.ModelViewSet):
	queryset = Products.objects.all()[:6]
	serializer_class = ProductsSerializer
	pagination_class = StandardResultsSetPagination	

	@action(detail=False, methods=['get'])
	def get_list(self, request):
		params = self.request.query_params
		slug = params.get('slug')
		color = params.get('color')
		size = params.get('size')
		price = params.get('price')
		sort = params.get('sort') or '-create'
		search = params.get('search')

		queryset = Products.objects.all().order_by(sort)
		if slug:
			queryset = queryset.filter(categories__slug=slug)
		if color and size:
			queryset = queryset.filter(product_type__color__slug = color, product_type__size__slug = size)
		elif color :
			queryset = queryset.filter(product_type__color__slug = color)
		elif size:
			queryset = queryset.filter(product_type__size__slug = size)

		if price:
			[min, max] = price.split('-')
			queryset = queryset.filter(product_price__gte=min).filter(product_price__lte=max)
		if search:
			queryset = queryset.filter(product_name__contains=search)
		pageData = self.paginate_queryset(queryset)
		if pageData is not None:
			if not pageData:
				return Response({'message': 'không có dữ liệu'}, status=status.HTTP_404_NOT_FOUND)
			serializer = self.get_serializer(pageData, many=True)
			return self.get_paginated_response(serializer.data)
		serializer = ProductsSerializer(queryset, many=True)
		return Response(serializer.data)

	def retrieve(self, request, pk=None):
		queryset = Products.objects.all()
		product = get_object_or_404(queryset, product_slug=pk)
		color = Color.objects.filter(product_color__product=product.id)
		size = CollectSize.objects.filter(product_size__product=product.id)
		serializer = ProductDetailSerializer(product, context={'request': request})
		serializer_color = ColorSerializer(color, many=True)
		serializer_size = CollectSizeSerializer(size, many=True)
		data = {
			'product': serializer.data,
			'color': serializer_color.data,
			'size': serializer_size.data
		}
		return Response(data)

class PromotionViewSet(viewsets.ModelViewSet):
	queryset = Promotion.objects.all()
	serializer_class = PromotionSerializer

class BlogViewSet(viewsets.ReadOnlyModelViewSet):
	queryset = Blogs.objects.all()
	serializer_class = BlogSerializer
	lookup_field = 'blog_slug'

class ColectFilterPriceViewSet(viewsets.ModelViewSet):
	queryset = ColectFilterPrice.objects.all()
	serializer_class = ColectFilterPriceSerializer

class CollectSizeViewSet(viewsets.ModelViewSet):
	queryset = CollectSize.objects.all()
	serializer_class = CollectSizeSerializer

class ColorViewSet(viewsets.ModelViewSet):
	queryset = Color.objects.all()
	serializer_class = ColorSerializer

class ProfileViewSet(viewsets.ViewSet):
	def retrieve(self, request, pk=None):
		queryset = Profile.objects.all()
		profile = get_object_or_404(queryset, pk=pk)
		serializer = ProfileSerializer(profile)
		return Response(serializer.data)
	
	def create(self, request, *args, **kwargs):
		serializer = ProfileSerializer(data=request.data)
		if serializer.is_valid():
				serializer.save()				
				return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
		
	def update(self, request, pk=None):
		queryset = Profile.objects.all()
		profile = get_object_or_404(queryset, pk=pk)
		serializer = ProfileSerializer(profile, data=request.data)
		if serializer.is_valid():
				serializer.save()
				return Response(serializer.data)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class OrderViewSet(viewsets.ViewSet):
	def retrieve(self, request, pk=None):
		queryset = Order.objects.all()
		order = get_object_or_404(queryset, pk=pk)
		serializer = OrderSerializer(order)
		return Response(serializer.data)
	
	def create(self, request, *args, **kwargs):		
		try: 
			order = {
				'profile_id': request.data['profileId'],
				'subtotal': request.data['cartTotal'],
				'total': request.data['orderTotal'],
				'delivery_fee': 0 if request.data['isFreeShip'] else 30000,
				'coupon': request.data['valueCoupon']['id'] if request.data['valueCoupon'] else None,
				'coupon_value': request.data['valueCoupon']['value'] if request.data['valueCoupon'] else 0,
			}
			serializer = OrderSerializer(data=order)
			if serializer.is_valid():
					serializer.save()
					order_id = serializer.data['id']
					order_items = request.data['cartItems']
					for order_item in order_items:
						data_order_item = {
							'order_id': order_id,
							'product_id': order_item['id'],
							'color_id': order_item['colorCurrent']['id'],
							'size_id': order_item['sizeCurrent']['id'],
							'quantity': order_item['quantity'],
							'price': order_item['price_discount'] if order_item['price_discount'] else order_item['product_price']
						}
						order_item_serializer = OrderItemSerializer(data=data_order_item)
						if order_item_serializer.is_valid():
							order_item_serializer.save()
							product = Products.objects.get(pk=order_item['id'])
							product.sold += 1 
							product.save()
						else:
							return Response({'message': 'Thêm sản phẩm lỗi'}, status=status.HTTP_400_REQUEST)
					return Response({'message': 'Tạo đơn hàng thành công '}, status=status.HTTP_201_CREATED)
			return Response({'message': 'Chưa tạo được đơn hàng'}, status=status.HTTP_400_BAD_REQUEST)
		except:
			return Response({'message': 'Lỗi nạp dữ liệu Api'}, status=status.HTTP_404_NOT_FOUND)
		
		
	def update(self, request, pk=None):
		queryset = Order.objects.all()
		profile = get_object_or_404(queryset, pk=pk)
		serializer = OrderSerializer(profile, data=request.data)
		if serializer.is_valid():
				serializer.save()
				return Response(serializer.data)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CouponViewset(viewsets.ViewSet):
	def retrieve(self, request, pk=None):		
		try:
			now = timezone.now()
			coupon = Coupon.objects.get(code=pk, valid_from__lte=now, valid_to__gte=now, active=True)
			serializer = CouponSerializer(coupon)
			return Response(serializer.data)
		except Coupon.DoesNotExist:
			return Response({'message': 'Mã giảm giá không tìm thấy hoặc hết hạn'}, status=status.HTTP_404_NOT_FOUND)
		except :
			return Response({'message': 'Áp mã không thành công'}, status=status.HTTP_400_BAD_REQUEST)

class ViewsViewset(viewsets.ViewSet):
	def create(self, request, *args, **kwargs):
		try:
			views = Views.objects.get(profile_id=request.data['profileId'], product_id=request.data['productId'])
			views.view += 1
			views.save()
			return Response(status=status.HTTP_201_CREATED)
		except Views.DoesNotExist:
			data_view = {
				'profile_id': request.data['profileId'],
				'product_id': request.data['productId'],
				'view': 1
			}
			serializer = ViewsSerializer(data=data_view)
			if serializer.is_valid():
					serializer.save()				
					return Response(status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
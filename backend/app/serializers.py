from django.contrib.auth.models import User, Group
from rest_framework import serializers

from .models import Categories, Products, Promotion, Blogs, ColectFilterPrice, CollectSize, Color, Profile, Order, OrderItem,ProductImage, ProductType, Coupon, Views

class UserSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = User
		fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Group
		fields = ['url', 'name']

class CategoriesSerializer(serializers.ModelSerializer):
	class Meta:
		model = Categories
		fields = ['title', 'slug', 'image']

class CategoriesTitleSerializer(serializers.ModelSerializer):
	class Meta:
		model = Categories
		fields = ['title', 'slug']

class ProductsSerializer(serializers.ModelSerializer):
	categories = CategoriesTitleSerializer()
	discount = serializers.SlugRelatedField(
        read_only=True,
        slug_field='rate',
				source="discount_valid"
     )
	views = serializers.SlugRelatedField(
        read_only=True,
        slug_field='view',
				many=True
     )
	class Meta:
		model = Products
		fields = ['id', 'product_name', 'product_slug', 'product_image', 'product_price', 'price_discount', 'discount', 'is_free_ship', 'exprire', 'short_description', 'categories', 'views', 'sold']

class CategoriesDetailSerializer(serializers.ModelSerializer):
	products = ProductsSerializer(many=True)
	class Meta:
		model = Categories
		fields = ['products']

class PromotionSerializer(serializers.ModelSerializer):
	class Meta:
		model = Promotion
		fields = ['id', 'promoto_name', 'promoto_expiration', 'promoto_slug', 'promoto_rate', 'expirated']

class BlogSerializer(serializers.ModelSerializer):	
	class Meta:
		model = Blogs
		fields = ['id', 'blog_title', 'blog_slug', 'blog_image', 'blog_content', 'bolg_user', 'create']

class ColectFilterPriceSerializer(serializers.ModelSerializer):
	class Meta:
		model = ColectFilterPrice
		fields = ['id', 'title', 'slug', 'min', 'max']

class CollectSizeSerializer(serializers.ModelSerializer):
	class Meta:
		model = CollectSize
		fields = ['id', 'title', 'slug']

class ColorSerializer (serializers.ModelSerializer):
	class Meta:
		model = Color
		fields = ['id', 'title', 'slug', 'code']

class ProfileSerializer (serializers.ModelSerializer):
	class Meta:
		model = Profile
		fields = ['id', 'name', 'phone', 'address', 'note']

class OrderSerializer (serializers.ModelSerializer):
	class Meta:
		model = Order
		fields = '__all__'

class OrderItemSerializer (serializers.ModelSerializer):
	class Meta:
		model = OrderItem
		fields = '__all__'

class ProductImageSerializer(serializers.ModelSerializer):
	class Meta:
		model = ProductImage
		fields = ['id', 'image', 'image_thumb']

class ProductTypeSerializer(serializers.ModelSerializer):
	color = ColorSerializer(many=False)
	size = CollectSizeSerializer(many=False)
	class Meta:
		model = ProductType
		fields = ['color', 'size']

class ProductDetailSerializer(serializers.ModelSerializer):
	image_detail = ProductImageSerializer(many=True)
	categories = CategoriesTitleSerializer(many=False)
	discount = serializers.SlugRelatedField(
        read_only=True,
        slug_field='rate',
				source="discount_valid"
     )
	class Meta:
		model = Products
		fields = ['id', 'product_name', 'product_price', 'product_slug', 'short_description', 'description', 'image_detail', 'is_free_ship', 'discount', 'image_detail', 'categories', 'price_discount', 'views', 'sold']

class CouponSerializer (serializers.ModelSerializer):
	class Meta:
		model = Coupon
		fields = '__all__'

class ViewsSerializer (serializers.ModelSerializer):
	class Meta:
		model = Views
		fields = '__all__'
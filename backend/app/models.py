from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from ckeditor.fields import RichTextField
from django.utils.text import slugify
from PIL import Image
from django.core.validators import MaxValueValidator, MinValueValidator
import datetime
import uuid
from decimal import *

# Create your models here.
class Categories(models.Model):
	title = models.CharField(max_length=150)
	slug = models.SlugField(max_length=150, default=uuid.uuid1, unique=True)
	image = models.ImageField(upload_to='image/category/%Y-%m-%d', blank=True)
	create = models.DateTimeField(auto_now_add=True)
	update = models.DateTimeField(auto_now=True)

	def save(self, *args, **kwargs):
		self.slug = slugify(self.title)
		super(Categories, self).save(*args, **kwargs)

	def __str__(self):
		return self.title

class Discount(models.Model):
	name = models.CharField(max_length=255, blank=True)
	valid_from = models.DateTimeField()
	valid_to = models.DateTimeField()
	rate = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(100)])
	active = models.BooleanField()
	create = models.DateTimeField(auto_now_add=True)
	update = models.DateTimeField(auto_now=True)

	def __str__(self):
		return self.name

class Coupon(models.Model):
	code = models.CharField(max_length=255, blank=True)
	valid_from = models.DateTimeField()
	valid_to = models.DateTimeField()
	value = models.PositiveIntegerField(default=0, blank=True)
	active = models.BooleanField()
	create = models.DateTimeField(auto_now_add=True)
	update = models.DateTimeField(auto_now=True)

	def __str__(self):
		return self.code

class Products(models.Model):
	product_name = models.CharField(max_length=150)
	product_slug = models.SlugField(max_length=150, default=uuid.uuid1, unique=True)
	product_image = models.ImageField(upload_to='image/product/%Y-%m-%d', blank=True)
	product_price = models.DecimalField(default=0, blank=True, max_digits=10, decimal_places=0)
	short_description = models.TextField(default='', blank=True, null=True)
	description = RichTextField(default='', blank=True)
	is_free_ship = models.BooleanField(default=False)
	sold = models.PositiveSmallIntegerField(default=0, blank=True)
	discount = models.ForeignKey(Discount, on_delete=models.SET_NULL, null=True, blank=True, related_name='product')
	categories = models.ForeignKey(Categories, on_delete=models.CASCADE, blank=True, related_name='products')
	create = models.DateTimeField(auto_now_add=True)
	update = models.DateTimeField(auto_now=True)

	@property
	def price_discount(self):
		if self.discount_valid:
			return self.product_price - (self.product_price * (self.discount_valid.rate / Decimal(100)))
		return None	

	@property
	def discount_valid(self):
		now = timezone.now()
		if self.discount:
			try:
				discount = Discount.objects.get(product__id=self.id,
																					valid_from__lte=now,
																					valid_to__gte=now,
																					active=True)
				return discount
			except Discount.DoesNotExist:
				return None
		return None	

	@property
	def exprire(self):
		if self.discount_valid:
				return self.discount_valid.valid_to
		return None	

	def save(self, *args, **kwargs):
		self.product_slug = slugify(self.product_name)
		super(Products, self).save(*args, **kwargs)
	class Meta:
		ordering = ['update']
	def __str__(self):
		return self.product_name

class ProductImage(models.Model):
	image = models.ImageField(upload_to='image/product_img/%Y-%m-%d', blank=True)
	image_thumb = models.ImageField(upload_to='image/product_img/%Y-%m-%d', blank=True)
	product = models.ForeignKey(Products, on_delete=models.CASCADE, blank=True, null=True, related_name='image_detail')
	create = models.DateTimeField(auto_now_add=True)
	update = models.DateTimeField(auto_now=True)
	
	def save(self):
			super().save()
			img_thumb = Image.open(self.image_thumb.path)
			if img_thumb.height > 100 or img_thumb.width > 120:
				new_img_thumb = (100, 120)
				img_thumb.thumbnail(new_img_thumb)
				img_thumb.save(self.image_thumb.path)

			img = Image.open(self.image.path)
			if img.height > 830 or img.width > 750:
				new_img = (750, 830)
				img.thumbnail(new_img)
				img.save(self.image.path) 

	def __str__(self):
		return str(self.id) 

class Promotion(models.Model):
	promoto_name = models.CharField(max_length=150)
	promoto_slug = models.SlugField(max_length=150, default=uuid.uuid1, unique=True)
	promoto_expiration = models.DateTimeField()
	promoto_rate = models.FloatField(default=0, blank=True)
	# product = models.OneToOneField(Products, on_delete=models.CASCADE, blank=True)
	create = models.DateTimeField(auto_now_add=True)
	update = models.DateTimeField(auto_now=True)

	@property
	def expirated(self):
		isExiration = int(datetime.datetime.now().strftime("%Y%m%d%H%M%S")) - int(self.promoto_expiration.strftime("%Y%m%d%H%M%S")) 
		return bool(isExiration > 0)

	def save(self, *args, **kwargs):
		self.promoto_slug = slugify(self.promoto_name)
		super(Promotion, self).save(*args, **kwargs)

	def __str__(self):
		return self.promoto_name

class Blogs(models.Model):
	blog_title = models.CharField(max_length=150)
	blog_slug = models.SlugField(max_length=150, default=uuid.uuid1, unique=True)
	blog_image = models.ImageField(upload_to='image/blog/%Y-%m-%d', blank=True)
	bolg_user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True)
	blog_content = RichTextField()
	create = models.DateTimeField(auto_now_add=True)
	update = models.DateTimeField(auto_now=True)

	def save(self, *args, **kwargs):
		self.blog_slug = slugify(self.blog_title)
		super(Blogs, self).save(*args, **kwargs)

	def __str__(self):
		return self.blog_title

class ColectFilterPrice(models.Model):
	title = models.CharField(max_length=150, default='', blank=True, null=True)
	slug = models.SlugField(max_length=150, default=uuid.uuid1, unique=True)
	min = models.IntegerField(default = 0)
	max = models.IntegerField(default = 0)
	create = models.DateTimeField(auto_now_add=True)
	update = models.DateTimeField(auto_now=True)

	def save(self, *args, **kwargs):
		self.title = f'{str(self.min)} - {str(self.max)}'
		self.slug = slugify(self.title)
		super(ColectFilterPrice, self).save(*args, **kwargs)

	def __str__(self):
		return self.title

class CollectSize(models.Model):
	title = models.CharField(max_length=150, default='', blank=True, null=True)
	slug = models.SlugField(max_length=150, default=uuid.uuid1, unique=True)
	create = models.DateTimeField(auto_now_add=True)
	update = models.DateTimeField(auto_now=True)

	def save(self, *args, **kwargs):
		self.slug = slugify(self.title)
		super(CollectSize, self).save(*args, **kwargs)

	def __str__(self):
		return self.title

class Color(models.Model):
	title = models.CharField(max_length=150, default='', blank=True, null=True)
	slug = models.SlugField(max_length=150, default=uuid.uuid1, unique=True)
	code = models.CharField(max_length=150, default='#fff', blank=True, null=True)
	create = models.DateTimeField(auto_now_add=True)
	update = models.DateTimeField(auto_now=True)

	def save(self, *args, **kwargs):
		super().save()
		if not self.slug:
			self.slug = slugify(self.title)
			super(Color, self).save(*args, **kwargs)

	def __str__(self):
		return self.title

class ProductType(models.Model):
	product = models.ForeignKey(Products, on_delete=models.CASCADE, blank=True, related_name='product_type')
	color = models.ForeignKey(Color, on_delete=models.CASCADE, blank=True, related_name='product_color')
	size = models.ForeignKey(CollectSize, on_delete=models.CASCADE, blank=True, related_name='product_size')

class Profile(models.Model):
	id = models.UUIDField(primary_key = True, default = uuid.uuid4,editable = False)
	name = models.CharField(max_length=150, default='anonymous', blank=True, null=True)
	address = models.TextField(default='', blank=True, null=True)
	phone = models.CharField(max_length=10, default='', blank=True, null=True)
	note = models.TextField(default='', blank=True, null=True)
	create = models.DateTimeField(auto_now_add=True)
	update = models.DateTimeField(auto_now=True)

	class Meta:
		ordering = ['-create']

	def __str__(self):
		return self.name

class Order(models.Model):
	STATUS_CHOICES = (
        ('ready', 'len don'),
        ('on_way', 'dang tren duong'),
        ('delivered', 'da giao'),
    )
	status = models.CharField(max_length=50,choices=STATUS_CHOICES, default='ready')
	profile_id = models.ForeignKey(Profile, on_delete=models.CASCADE, blank=True)
	coupon = models.ForeignKey(Coupon, on_delete=models.SET_NULL, blank=True, null=True)
	coupon_value = models.PositiveIntegerField(default=0, null=True)
	subtotal = models.PositiveBigIntegerField(blank=True)
	total = models.PositiveBigIntegerField(blank=True)
	delivery_fee = models.PositiveSmallIntegerField(default=30000)
	create = models.DateTimeField(auto_now_add=True)
	update = models.DateTimeField(auto_now=True)

	def __str__(self):
		return str(self.id)

class OrderItem(models.Model):	
	order_id = models.ForeignKey(Order, on_delete=models.CASCADE, blank=True)
	product_id = models.ForeignKey(Products, on_delete=models.CASCADE, blank=True)
	color_id = models.ForeignKey(Color, on_delete=models.CASCADE, blank=True, null=True)
	size_id = models.ForeignKey(CollectSize, on_delete=models.CASCADE, blank=True, null=True)
	quantity = models.PositiveSmallIntegerField(default=1)
	price = models.PositiveBigIntegerField(default=0)
	
	create = models.DateTimeField(auto_now_add=True)
	update = models.DateTimeField(auto_now=True)

	def __str__(self):
		return str(self.id)

class Views(models.Model):
	product_id = models.ForeignKey(Products, on_delete=models.CASCADE, blank=True, related_name='views')
	profile_id = models.ForeignKey(Profile, on_delete=models.CASCADE, blank=True, null=True)
	view = models.PositiveSmallIntegerField(default=0, blank=True)
	
	create = models.DateTimeField(auto_now_add=True)
	update = models.DateTimeField(auto_now=True)

	def __str__(self):
		return str(self.id)
from django.contrib import admin
from .models import Categories, Products, Promotion, Blogs, ColectFilterPrice, CollectSize, Color, ProductType, Profile, Order, OrderItem, ProductImage, Discount, Coupon, Views

# Register your models here.
class CategoriesAdmin(admin.ModelAdmin):
    fields = ['title', 'image']
    list_display = ('title', 'slug', 'image')

class ProductInline(admin.TabularInline):
    model = ProductType

class ProductImageInline(admin.TabularInline):
    model = ProductImage

class ProductsAdmin(admin.ModelAdmin):
    inlines = [
        ProductInline,
        ProductImageInline
    ]
    list_display = ('product_name', 'product_price', 'product_image', 'create', 'update')

class PromotionAdmin(admin.ModelAdmin):
    list_display = ('promoto_name', 'promoto_expiration', 'promoto_slug', 'promoto_rate', 'expirated')

class BlogsAdmin(admin.ModelAdmin):
    list_display = ('blog_title', 'blog_slug', 'blog_image', 'bolg_user', 'create')

class ColectFilterPriceAdmin(admin.ModelAdmin):
    list_display = ('title', 'slug', 'min', 'max', 'create')

class CollectSizeAdmin(admin.ModelAdmin):
    list_display = ('title', 'slug', 'create')

class ColorAdmin(admin.ModelAdmin):
    list_display = ('title', 'slug', 'code')

class ProfileAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'address', 'phone', 'create', 'update')

class DiscountAdmin(admin.ModelAdmin):
    list_display = ['name', 'active', 'valid_from', 'valid_to', 'rate']
    list_filter = ['active', 'valid_from', 'valid_to']
    search_fields = ['name']

class CouponAdmin(admin.ModelAdmin):
    list_display = ['code', 'valid_from', 'valid_to', 'value', 'active']
    list_filter = ['active', 'valid_from', 'valid_to']
    search_fields = ['code']

class ViewsAdmin(admin.ModelAdmin):
    list_display = ['profile_id', 'product_id', 'view']

admin.site.register(Categories, CategoriesAdmin)
admin.site.register(Products, ProductsAdmin)
admin.site.register(Promotion, PromotionAdmin)
admin.site.register(Blogs, BlogsAdmin)
admin.site.register(ColectFilterPrice, ColectFilterPriceAdmin)
admin.site.register(CollectSize, CollectSizeAdmin)
admin.site.register(Color, ColorAdmin)
admin.site.register(Profile, ProfileAdmin)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(ProductImage)
admin.site.register(Coupon)
admin.site.register(Discount, DiscountAdmin)
admin.site.register(Views, ViewsAdmin)
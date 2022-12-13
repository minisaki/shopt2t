from rest_framework import routers
from django.urls import path, include
from app.views import UserViewSet, GroupViewSet, CategoriesViewSet, ProductsViewSet, PromotionViewSet, BlogViewSet, ColectFilterPriceViewSet, CollectSizeViewSet, ColorViewSet, ProfileViewSet, OrderViewSet, CouponViewset, ViewsViewset


router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'groups', GroupViewSet)
router.register(r'categories', CategoriesViewSet)
router.register(r'products', ProductsViewSet)
router.register(r'promotion', PromotionViewSet)
router.register(r'blog', BlogViewSet)
router.register(r'price', ColectFilterPriceViewSet)
router.register(r'size', CollectSizeViewSet)
router.register(r'color', ColorViewSet)
router.register(r'profile', ProfileViewSet, basename='profile')
router.register(r'order', OrderViewSet, basename='order')
router.register(r'coupon', CouponViewset, basename='coupon')
router.register(r'view', ViewsViewset, basename='view')
urlpatterns = [
	path('', include(router.urls)),
]
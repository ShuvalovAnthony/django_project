from django.contrib import admin
from django.urls import path, include, re_path

from blog.views import TopicViewSet
from rest_framework import routers

router = routers.DefaultRouter() 
router.register(r'topic', TopicViewSet)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include(router.urls)),
    path('api/v1/auth', include('djoser.urls')),
    re_path(r'^auth/', include('djoser.urls.authtoken')),
]

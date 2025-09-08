from django.urls import path
from .views import BlogPostListCreate, BlogPostDetail

urlpatterns = [
    path('blog/', BlogPostListCreate.as_view(), name='blog-list'),
    path('blog/<int:pk>/', BlogPostDetail.as_view(), name='blog-detail'),
]

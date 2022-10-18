from rest_framework import viewsets, pagination
from .serializers import TopicSerializer
from .models import Topic
from .permissions import IsAdminOrReadOnly


class TopicAPIListPagination(pagination.PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100


class TopicViewSet(viewsets.ModelViewSet):
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer
    permission_classes = ()
    pagination_class = TopicAPIListPagination
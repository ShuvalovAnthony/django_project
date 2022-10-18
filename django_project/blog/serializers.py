from email.policy import default
from rest_framework import serializers

from .models import Topic 


class TopicSerializer(serializers.ModelSerializer):
   user = serializers.HiddenField(default=serializers.CurrentUserDefault())

   class Meta:
      model = Topic
      fields = "__all__"

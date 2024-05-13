from rest_framework import serializers

from accounts.models import User
from core.models import AppTheme


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ["id", "url", "email"]


class AppThemeSerializer(serializers.ModelSerializer):
    class Meta:
        model = AppTheme
        fields = "__all__"

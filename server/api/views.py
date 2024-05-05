import logging

from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from accounts.models import User
from api import serializers

logger = logging.getLogger(__name__)


class CurrentUserView(APIView):
    def get(self, request):
        serializer = serializers.UserSerializer(
            request.user, context={"request": request}
        )
        return Response(serializer.data)


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """

    queryset = User.objects.all().order_by("-date_joined")
    serializer_class = serializers.UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        """
        This view should return a list of all the events organized
        for the currently authenticated user's group.
        """
        user = self.request.user
        if user.is_superuser:
            return User.objects.all()

        return User.objects.filter(id=user.id)

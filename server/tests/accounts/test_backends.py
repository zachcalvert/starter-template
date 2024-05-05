import pytest

from django.contrib.auth import get_user_model
from django.test import RequestFactory

from core.backends import EmailModelBackend

UserModel = get_user_model()


@pytest.mark.django_db
def test_authentication_with_valid_credentials(api_user):
    backend = EmailModelBackend()
    request = RequestFactory().get("/")
    authenticated_user = backend.authenticate(
        request, email=api_user.email, password="password"
    )
    assert authenticated_user == api_user


@pytest.mark.django_db
def test_authentication_with_invalid_email():
    backend = EmailModelBackend()
    request = RequestFactory().get("/")
    authenticated_user = backend.authenticate(
        request, email="invalid@example.com", password="password"
    )
    assert authenticated_user is None


@pytest.mark.django_db
def test_authentication_with_invalid_password(api_user):
    backend = EmailModelBackend()
    request = RequestFactory().get("/")
    authenticated_user = backend.authenticate(
        request, email=api_user.email, password="invalid"
    )
    assert authenticated_user is None


@pytest.mark.django_db
def test_authentication_with_missing_email():
    backend = EmailModelBackend()
    request = RequestFactory().get("/")
    authenticated_user = backend.authenticate(request, password="password")
    assert authenticated_user is None

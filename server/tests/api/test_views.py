import pytest
from django.contrib.auth import get_user_model

User = get_user_model()


@pytest.mark.django_db
def test_current_user(api_client):
    response = api_client.get(f"/api/current-user/")
    assert response.status_code == 200

    content = response.json()
    assert content["email"] == "api_user@example.com"

    expected_keys = {"id", "url", "email"}
    assert set(content.keys()) == expected_keys


@pytest.mark.django_db
def test_user_viewset(api_client, api_user, admin_user):
    assert User.objects.count() == 2

    response = api_client.get("/api/users/")
    assert response.status_code == 200

    content = response.json()
    assert content["count"] == 1
    assert content["results"][0]["email"] == "api_user@example.com"

    expected_keys = {"id", "url", "email"}
    assert set(content["results"][0].keys()) == expected_keys


@pytest.mark.django_db
def test_user_viewset_as_superuser(admin_api_client, api_user, admin_user):
    assert User.objects.count() == 2
    response = admin_api_client.get("/api/users/")
    assert response.status_code == 200

    content = response.json()
    assert content["count"] == 2

    expected_keys = {"id", "url", "email"}
    assert set(content["results"][0].keys()) == expected_keys


@pytest.mark.django_db
def test_user_details(api_client, api_user):
    response = api_client.get(f"/api/users/{api_user.id}/")
    assert response.status_code == 200

    content = response.json()
    assert content["email"] == "api_user@example.com"

    expected_keys = {"id", "url", "email"}
    assert set(content.keys()) == expected_keys

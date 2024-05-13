import pytest


@pytest.mark.django_db
def test_app_theme_name(app_theme):
    assert str(app_theme) == "Theme one"

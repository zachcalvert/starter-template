from django.db import models
from shortuuid.django_fields import ShortUUIDField


class BaseModel(models.Model):
    id = ShortUUIDField(
        primary_key=True,
        length=8,
        max_length=40,
        alphabet="abcdefg12345678",
    )
    created = models.DateTimeField(auto_now_add=True)
    last_updated = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class AppTheme(models.Model):
    name = models.CharField(max_length=50, null=True)
    primary = models.CharField(max_length=7)
    secondary = models.CharField(max_length=7, null=True)
    background = models.CharField(max_length=7)
    font_color = models.CharField(max_length=7, default="FFF")
    header_font_color = models.CharField(max_length=7, default="FFF")

    class Meta:
        ordering = ("-name",)

    def __str__(self):
        return self.name
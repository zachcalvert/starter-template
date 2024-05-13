from django.contrib import admin

from core.models import AppTheme


class AppThemeAdmin(admin.ModelAdmin):
    list_display = ("name", "background", "font_color")
    fields = [
        "name",
        "primary",
        "secondary",
        "background",
        "font_color",
        "header_font_color",
    ]


admin.site.register(AppTheme, AppThemeAdmin)

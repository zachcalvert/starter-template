# Generated by Django 4.2 on 2024-05-13 15:00

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AppTheme',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, null=True)),
                ('background', models.CharField(max_length=7)),
                ('font_color', models.CharField(default='FFF', max_length=7)),
                ('header_background', models.CharField(max_length=7)),
                ('header_font_color', models.CharField(default='FFF', max_length=7)),
            ],
            options={
                'ordering': ('-name',),
            },
        ),
    ]

# Generated by Django 3.2.16 on 2022-11-17 16:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0011_profile'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='name',
            field=models.CharField(blank=True, default='anonymous', max_length=150, null=True),
        ),
    ]

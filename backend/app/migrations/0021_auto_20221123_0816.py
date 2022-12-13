# Generated by Django 3.2.16 on 2022-11-23 08:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0020_alter_products_categories'),
    ]

    operations = [
        migrations.AddField(
            model_name='products',
            name='description',
            field=models.TextField(blank=True, default=''),
        ),
        migrations.AddField(
            model_name='products',
            name='short_description',
            field=models.CharField(blank=True, default='', max_length=255),
        ),
    ]

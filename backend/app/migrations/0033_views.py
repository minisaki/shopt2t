# Generated by Django 3.2.16 on 2022-12-01 05:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0032_alter_order_coupon_value'),
    ]

    operations = [
        migrations.CreateModel(
            name='Views',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('view', models.PositiveSmallIntegerField(blank=True, default=0)),
                ('create', models.DateTimeField(auto_now_add=True)),
                ('update', models.DateTimeField(auto_now=True)),
                ('product_id', models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to='app.products')),
                ('profile_id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='app.profile')),
            ],
        ),
    ]

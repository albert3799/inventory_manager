# Generated by Django 4.0.3 on 2022-04-29 17:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_coupon_itemcategory'),
    ]

    operations = [
        migrations.CreateModel(
            name='Transaction',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('transaction_id', models.IntegerField(unique=True)),
                ('transaction_date', models.DateField()),
                ('total', models.IntegerField()),
                ('coupon_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='api.coupon')),
                ('customer_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='api.customer')),
            ],
        ),
    ]

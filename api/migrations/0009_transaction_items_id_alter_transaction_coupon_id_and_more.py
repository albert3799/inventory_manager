# Generated by Django 4.0.3 on 2022-04-30 17:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_transaction_employee_id_transaction_store_id_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='transaction',
            name='items_id',
            field=models.CharField(default=0, max_length=80),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='transaction',
            name='coupon_id',
            field=models.CharField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='transaction',
            name='customer_id',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='transaction',
            name='employee_id',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='transaction',
            name='store_id',
            field=models.CharField(max_length=10, null=True),
        ),
    ]

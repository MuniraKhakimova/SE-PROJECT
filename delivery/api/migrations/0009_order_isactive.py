# Generated by Django 3.0.5 on 2020-04-21 10:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_order'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='isActive',
            field=models.BooleanField(default=True),
        ),
    ]

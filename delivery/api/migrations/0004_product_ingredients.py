# Generated by Django 3.0.5 on 2020-04-20 09:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20200420_1451'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='ingredients',
            field=models.TextField(default=''),
        ),
    ]
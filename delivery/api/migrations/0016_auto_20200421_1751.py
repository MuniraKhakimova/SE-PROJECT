# Generated by Django 3.0.5 on 2020-04-21 11:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0015_remove_employee_email'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='employee',
            name='first_name',
        ),
        migrations.RemoveField(
            model_name='employee',
            name='last_name',
        ),
    ]
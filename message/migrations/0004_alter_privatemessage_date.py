# Generated by Django 4.2.1 on 2023-05-25 09:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('message', '0003_alter_privatemessage_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='privatemessage',
            name='date',
            field=models.DateTimeField(auto_now_add=True, verbose_name='written'),
        ),
    ]

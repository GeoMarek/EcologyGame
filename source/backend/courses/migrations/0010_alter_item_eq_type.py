# Generated by Django 3.2.7 on 2021-11-17 17:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0009_auto_20211117_1633'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='eq_type',
            field=models.CharField(choices=[('a', 'Armor'), ('w', 'Weapon')], default='w', max_length=1),
        ),
    ]
# Generated by Django 3.2.7 on 2021-11-28 18:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("courses", "0013_item_image"),
    ]

    operations = [
        migrations.AlterField(
            model_name="character",
            name="gold",
            field=models.IntegerField(default=100),
        ),
    ]

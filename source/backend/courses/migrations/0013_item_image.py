# Generated by Django 3.2.7 on 2021-11-28 16:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("courses", "0012_auto_20211126_2044"),
    ]

    operations = [
        migrations.AddField(
            model_name="item",
            name="image",
            field=models.CharField(default="miecz.png", max_length=128),
        ),
    ]

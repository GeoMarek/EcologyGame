# Generated by Django 3.2.7 on 2021-12-06 11:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("courses", "0025_alter_approach_duration_time"),
    ]

    operations = [
        migrations.AddField(
            model_name="approach",
            name="checked",
            field=models.BooleanField(default=False),
        ),
    ]

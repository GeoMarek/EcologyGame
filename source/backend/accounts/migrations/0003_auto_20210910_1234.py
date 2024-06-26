# Generated by Django 3.2.6 on 2021-09-10 10:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("accounts", "0002_profile"),
    ]

    operations = [
        migrations.AlterField(
            model_name="profile",
            name="first_name",
            field=models.CharField(default="el_imie", max_length=120),
        ),
        migrations.AlterField(
            model_name="profile",
            name="gender",
            field=models.CharField(
                choices=[("M", "Male"), ("F", "Female")], max_length=1
            ),
        ),
        migrations.AlterField(
            model_name="profile",
            name="last_name",
            field=models.CharField(default="el_nazwisko", max_length=120),
        ),
    ]

# Generated by Django 3.2.7 on 2021-12-02 11:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("courses", "0022_alter_approach_duration_time"),
    ]

    operations = [
        migrations.AlterField(
            model_name="approach",
            name="result_in_percent",
            field=models.DecimalField(decimal_places=2, max_digits=5),
        ),
    ]

# Generated by Django 3.2.7 on 2021-12-02 11:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("courses", "0024_alter_approach_duration_time"),
    ]

    operations = [
        migrations.AlterField(
            model_name="approach",
            name="duration_time",
            field=models.DurationField(null=True),
        ),
    ]

# Generated by Django 3.2.7 on 2021-12-02 11:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("courses", "0023_alter_approach_result_in_percent"),
    ]

    operations = [
        migrations.AlterField(
            model_name="approach",
            name="duration_time",
            field=models.DateTimeField(null=True),
        ),
    ]
# Generated by Django 3.2.7 on 2021-11-18 18:04

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("courses", "0010_alter_item_eq_type"),
    ]

    operations = [
        migrations.CreateModel(
            name="Quiz",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(default="nazwa quizu", max_length=64)),
                ("description", models.TextField(default="opis quizu")),
                ("creation_time", models.DateField(auto_now_add=True)),
                ("start_time", models.DateTimeField()),
                ("end_time", models.DateTimeField()),
                ("duration_time", models.DateTimeField()),
                ("number_of_questions", models.IntegerField(default=0)),
                ("max_points", models.IntegerField(default=0)),
                ("reward_exp", models.IntegerField(default=4)),
                ("reward_gold", models.IntegerField(default=3)),
                ("number_of_approaches", models.IntegerField(default=1)),
                (
                    "selecting_result",
                    models.CharField(
                        choices=[("b", "Best"), ("l", "Last")],
                        default="b",
                        max_length=1,
                    ),
                ),
                (
                    "course",
                    models.ForeignKey(
                        blank=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        to="courses.course",
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Question",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(default="nazwa pytania", max_length=64)),
                ("content", models.TextField(default="treść zadania")),
                ("a1", models.TextField(default="odp 1")),
                ("a2", models.TextField(default="odp 2")),
                ("a3", models.TextField(default="odp 3")),
                ("a4", models.TextField(default="odp 4")),
                ("a5", models.TextField(default="odp 5")),
                ("a6", models.TextField(default="odp 6")),
                ("correct_answer", models.CharField(max_length=1)),
                ("points", models.IntegerField()),
                ("dmg", models.IntegerField(default=1)),
                (
                    "quiz",
                    models.ForeignKey(
                        blank=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        to="courses.quiz",
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Approach",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("start_time", models.DateField(auto_now_add=True)),
                ("end_time", models.DateTimeField()),
                ("duration_time", models.DateTimeField()),
                ("obtained_points", models.IntegerField(default=0)),
                (
                    "result_in_percent",
                    models.DecimalField(decimal_places=2, max_digits=4),
                ),
                (
                    "quiz",
                    models.ForeignKey(
                        blank=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        to="courses.quiz",
                    ),
                ),
                (
                    "user",
                    models.ForeignKey(
                        blank=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Answer",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("user_answer", models.CharField(max_length=1)),
                (
                    "approach",
                    models.ForeignKey(
                        blank=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        to="courses.approach",
                    ),
                ),
                (
                    "question",
                    models.ForeignKey(
                        blank=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        to="courses.question",
                    ),
                ),
            ],
        ),
    ]

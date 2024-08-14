# Generated by Django 4.2.13 on 2024-08-03 00:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('orka', '0013_project_budget'),
    ]

    operations = [
        migrations.AlterField(
            model_name='expense',
            name='project',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='expenses', to='orka.project'),
        ),
    ]
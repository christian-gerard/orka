# Generated by Django 4.2.13 on 2024-07-23 17:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orka', '0009_alter_project_deadline'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='expense',
            name='name',
        ),
        migrations.AddField(
            model_name='expense',
            name='status',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]

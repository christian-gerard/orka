# Generated by Django 4.2.13 on 2024-08-20 20:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orka', '0014_alter_expense_project'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='password',
            field=models.CharField(max_length=200),
        ),
    ]

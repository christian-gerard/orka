# Generated by Django 4.2.13 on 2024-08-20 20:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('orka', '0015_alter_user_password'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='account',
            field=models.ForeignKey(default='1', on_delete=django.db.models.deletion.CASCADE, to='orka.account'),
        ),
    ]
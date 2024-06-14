# Generated by Django 4.2.13 on 2024-06-13 20:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('orka', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Client',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('account', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='orka.account')),
            ],
        ),
    ]

# Generated by Django 4.2.13 on 2024-08-23 22:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('orka', '0017_alter_user_account'),
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(blank=True, max_length=30)),
                ('last_name', models.CharField(blank=True, max_length=30)),
                ('email', models.EmailField(blank=True, max_length=100)),
                ('phone_number', models.IntegerField(blank=True)),
                ('description', models.CharField(blank=True, max_length=30)),
                ('position', models.CharField(blank=True, max_length=20)),
                ('poc', models.BooleanField(default=False)),
                ('Client', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='contacts', to='orka.client')),
            ],
        ),
    ]
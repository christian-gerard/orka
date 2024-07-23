# Generated by Django 4.2.13 on 2024-07-23 17:49

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('orka', '0006_alter_project_deadline'),
    ]

    operations = [
        migrations.CreateModel(
            name='Expense',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('description', models.CharField(blank=True, max_length=300)),
                ('amount', models.IntegerField()),
                ('note', models.CharField(max_length=100)),
                ('type', models.CharField(max_length=100)),
                ('deadline', models.DateTimeField(blank=True, default=django.utils.timezone.now)),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='expense', to='orka.project')),
            ],
        ),
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(max_length=100)),
                ('deadline', models.DateTimeField(blank=True, default=django.utils.timezone.now)),
                ('note', models.CharField(max_length=1000)),
                ('type', models.CharField(blank=True, max_length=20)),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tasks', to='orka.project')),
            ],
        ),
        migrations.RemoveField(
            model_name='productionneed',
            name='project',
        ),
        migrations.RemoveField(
            model_name='userproductionneed',
            name='productionneed',
        ),
        migrations.RemoveField(
            model_name='userproductionneed',
            name='user',
        ),
        migrations.RemoveField(
            model_name='client',
            name='client_img',
        ),
        migrations.RemoveField(
            model_name='client',
            name='isActive',
        ),
        migrations.AddField(
            model_name='client',
            name='address_first',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AddField(
            model_name='client',
            name='address_second',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AddField(
            model_name='client',
            name='city',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AddField(
            model_name='client',
            name='country',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AddField(
            model_name='client',
            name='ein',
            field=models.IntegerField(default=999999999),
        ),
        migrations.AddField(
            model_name='client',
            name='state',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AddField(
            model_name='client',
            name='zip_code',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.DeleteModel(
            name='BudgetItem',
        ),
        migrations.DeleteModel(
            name='ProductionNeed',
        ),
        migrations.DeleteModel(
            name='UserProductionNeed',
        ),
    ]

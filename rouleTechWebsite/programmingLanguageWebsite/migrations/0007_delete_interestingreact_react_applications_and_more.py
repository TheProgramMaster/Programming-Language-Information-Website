# Generated by Django 5.0.7 on 2024-07-16 21:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('programmingLanguageWebsite', '0006_rename_language_interestingreact_programminglanguage'),
    ]

    operations = [
        migrations.DeleteModel(
            name='InterestingReact',
        ),
        migrations.AddField(
            model_name='react',
            name='applications',
            field=models.CharField(max_length=500, null='Description'),
            preserve_default='Description',
        ),
        migrations.AddField(
            model_name='react',
            name='programmingLanguage',
            field=models.CharField(max_length=30, null='Programming Language'),
            preserve_default='Programming Language',
        ),
    ]

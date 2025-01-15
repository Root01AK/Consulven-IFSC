# Generated by Django 5.1.4 on 2025-01-07 16:05

import django.db.models.deletion
import wagtail.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Api', '0003_job_delete_homepage'),
        ('wagtailcore', '0094_alter_page_locale'),
    ]

    operations = [
        migrations.CreateModel(
            name='Jobcard',
            fields=[
                ('page_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='wagtailcore.page')),
                ('work_type', wagtail.fields.RichTextField(blank=True)),
                ('experience', wagtail.fields.RichTextField(blank=True)),
                ('latest', wagtail.fields.RichTextField(blank=True)),
                ('location', wagtail.fields.RichTextField(blank=True)),
                ('short_description', wagtail.fields.RichTextField(blank=True)),
            ],
            options={
                'abstract': False,
            },
            bases=('wagtailcore.page',),
        ),
    ]
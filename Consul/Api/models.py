from django.db import models
from wagtail.api import APIField
from wagtail.models import Page
from wagtail.fields import RichTextField, StreamField
from wagtail.admin.panels import FieldPanel
from wagtail.blocks import TextBlock


class contact(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=254)
    phone = models.CharField(max_length=50)
    message = models.TextField(max_length=100)
    
    def _str_(self): 
        return f"Message from {self.name}"


class Enquiry(models.Model):
    user_name = models.CharField(max_length=50)
    user_email = models.EmailField(max_length=254)
    user_phone = models.CharField(max_length=50)
    company_name = models.CharField(max_length=50)
    user_message = models.CharField(max_length=50)
    
    def _str_(self):
        return f"Message from {self.name}"


class career(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    jobTitle = models.CharField(max_length=100)
    experience = models.TextField()
    jobtype = models.CharField(max_length=50)
    files = models.ManyToManyField('File', blank=True)

class File(models.Model):
    file = models.FileField(upload_to='job_applications/')
    uploaded_at = models.DateTimeField(auto_now_add=True)
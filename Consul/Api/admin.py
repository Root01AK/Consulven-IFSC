from django.contrib import admin
from .models import career, Enquiry, contact
# Register your models here.


admin.site.register(contact)
admin.site.register(Enquiry)
admin.site.register(career)
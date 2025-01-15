from rest_framework import serializers
from .models import contact
from .models import Enquiry
from .models import career

class contactserializers(serializers.ModelSerializer):
    class Meta:
        model = contact
        fields = ['name', 'email', 'phone', 'message']
    
class Enquiryserializers(serializers.ModelSerializer):
    class Meta:
        model = Enquiry
        fields = ['user_name', 'user_email', 'user_phone', 'company_name', 'user_message']

class careerserializers(serializers.ModelSerializer):
    class Meta:
        model = career
        fields = ['name', 'email', 'phone', 'jobTitle', 'experience', 'jobType', 'files']
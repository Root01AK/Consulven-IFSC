from django.urls import path
from .views import contactapi
from .views import Enquiryapi
from .views import careerapi

urlpatterns = [
    path('api/contact/', contactapi.as_view(), name="contact"),
    path('api/enquiry/', Enquiryapi.as_view(), name="enquiry"),
    path('api/job/', careerapi.as_view(), name="job")
]

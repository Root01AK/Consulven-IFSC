import logging
from django.shortcuts import render
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from django.conf import settings
from django.core.mail import send_mail
from .serializers import contactserializers, Enquiryserializers, careerserializers
from django.utils.html import strip_tags
from django.core.mail import EmailMultiAlternatives


logger = logging.getLogger(__name__)

class contactapi(APIView):
    permission_classes = [AllowAny]
    
    def post(self, request):
        serializer = contactserializers(data=request.data)

        if serializer.is_valid():
            name = serializer.validated_data['name']
            email = serializer.validated_data['email']
            phone = serializer.validated_data['phone']
            message = serializer.validated_data['message']
        
            html_message = f"""
                <html>
                    <head>
                        <style>
                            body {{
                                font-family: Arial, sans-serif;
                                color: #333;
                                background-color: #f9f9f9;
                                padding: 20px;
                            }}
                            .container {{
                                max-width: 600px;
                                margin: 0 auto;
                                background-color: #fff;
                                padding: 20px;
                                border-radius: 8px;
                                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                            }}
                            .header {{
                                font-size: 24px;
                                color: #333;
                                margin-bottom: 10px;
                            }}
                            .content {{
                                font-size: 16px;
                                line-height: 1.5;
                            }}
                            .content p {{
                                margin-bottom: 10px;
                            }}
                            .footer {{
                                font-size: 12px;
                                color: #777;
                                text-align: center;
                                margin-top: 20px;
                            }}
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <h2 class="header">Message from Consulven IFSC</h2>
                            <div class="content">
                                <p><strong>Name:</strong> {name}</p>
                                <p><strong>Email:</strong> {email}</p>
                                <p><strong>Phone:</strong> {phone}</p>
                                <p><strong>Message:</strong><br>{message}</p>
                            </div>
                            <div class="footer">
                                <p>Thank you for your inquiry. We will get back to you shortly.</p>
                            </div>
                        </div>
                    </body>
                </html>
            """
            plain_message = strip_tags(html_message)
        
            email_message = EmailMultiAlternatives(
                'Message from Consulven IFSC[Contact Form]', 
                plain_message,
                email,
                [settings.CONTACT_EMAIL],
                reply_to=[email],
            )
            email_message.attach_alternative(html_message, "text/html")
            email_message.send(fail_silently=False)
            user_confirmation_message = f"""
                <html>
                    <head>
                        <style>
                            body {{
                                font-family: Arial, sans-serif;
                                color: #333;
                                background-color: #f9f9f9;
                                padding: 20px;
                            }}
                            .container {{
                                max-width: 600px;
                                margin: 0 auto;
                                background-color: #fff;
                                padding: 20px;
                                border-radius: 8px;
                                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                            }}
                            .header {{
                                font-size: 24px;
                                color: #333;
                                margin-bottom: 10px;
                            }}
                            .content {{
                                font-size: 16px;
                                line-height: 1.5;
                            }}
                            .footer {{
                                font-size: 12px;
                                color: #777;
                                text-align: center;
                                margin-top: 20px;
                            }}
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <h2 class="header">Thank You for Contacting Us, {name}!</h2>
                            <div class="content">
                                <p>We have received your message and will get back to you as soon as possible.</p>
                                <p>We appreciate your interest in Consulven IFSC!</p>
                            </div>
                            <div class="footer">
                                <p>If you have any further questions, feel free to reach out.</p>
                            </div>
                        </div>
                    </body>
                </html>
            """

            # Send email to the user as a confirmation
            send_mail(
                'Thank you for contacting us!',
                strip_tags(user_confirmation_message),  # Plain text version
                settings.DEFAULT_FROM_EMAIL,  # Default sender (or use a custom email)
                [email],  # Send it to the user's email
                html_message=user_confirmation_message,  # HTML email content
                fail_silently=False,
            )

            return Response({"status": "Message sent successfully!"}, status=200)

        # If the data is invalid, return a 400 error with the validation errors
        return Response({"status": "Invalid data!", "errors": serializer.errors}, status=400)

class Enquiryapi(APIView):
    permission_classes =[AllowAny]
    
    def post(self, request):
        serializer = Enquiryserializers(data=request.data)
        
        if serializer.is_valid():
            user_name = serializer.validated_data['user_name']
            user_email = serializer.validated_data['user_email']
            user_phone = serializer.validated_data['user_phone']
            company_name = serializer.validated_data['company_name']
            user_message = serializer.validated_data['user_message']
            
            html_message = f"""
                <html>
                    <head>
                        <style>
                            body {{
                                font-family: Arial, sans-serif;
                                color: #333;
                                background-color: #f9f9f9;
                                padding: 20px;
                            }}
                            .container {{
                                max-width: 600px;
                                margin: 0 auto;
                                background-color: #fff;
                                padding: 20px;
                                border-radius: 8px;
                                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                            }}
                            .header {{
                                font-size: 24px;
                                color: #333;
                                margin-bottom: 10px;
                            }}
                            .content {{
                                font-size: 16px;
                                line-height: 1.5;
                            }}
                            .content p {{
                                margin-bottom: 10px;
                            }}
                            .footer {{
                                font-size: 12px;
                                color: #777;
                                text-align: center;
                                margin-top: 20px;
                            }}
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <h2 class="header">Message from Consulven IFSC</h2>
                            <div class="content">
                                <p><strong>Name:</strong> {user_name}</p>
                                <p><strong>Email:</strong> {user_email}</p>
                                <p><strong>Phone:</strong> {user_phone}</p>
                                <p><strong>Company:</strong> {company_name}</p>
                                <p><strong>Message:</strong><br>{user_message}</p>
                            </div>
                            <div class="footer">
                                <p>Thank you for your inquiry. We will get back to you shortly.</p>
                            </div>
                        </div>
                    </body>
                </html>
            """
            plain_message = strip_tags(html_message)
        
            user_email_message = EmailMultiAlternatives(
                'Message from Consulven IFSC[Contact Form]', 
                plain_message,
                user_email,
                [settings.CONTACT_EMAIL],
                reply_to=[user_email],
            )
            user_email_message.attach_alternative(html_message, "text/html")
            user_email_message.send(fail_silently=False)
            user_confirmation_message = f"""
                <html>
                    <head>
                        <style>
                            body {{
                                font-family: Arial, sans-serif;
                                color: #333;
                                background-color: #f9f9f9;
                                padding: 20px;
                            }}
                            .container {{
                                max-width: 600px;
                                margin: 0 auto;
                                background-color: #fff;
                                padding: 20px;
                                border-radius: 8px;
                                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                            }}
                            .header {{
                                font-size: 24px;
                                color: #333;
                                margin-bottom: 10px;
                            }}
                            .content {{
                                font-size: 16px;
                                line-height: 1.5;
                            }}
                            .footer {{
                                font-size: 12px;
                                color: #777;
                                text-align: center;
                                margin-top: 20px;
                            }}
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <h2 class="header">Thank You for Contacting Us, {user_name}!</h2>
                            <div class="content">
                                <p>We have received your message and will get back to you as soon as possible.</p>
                                <p>We appreciate your interest in Consulven IFSC!</p>
                            </div>
                            <div class="footer">
                                <p>If you have any further questions, feel free to reach out.</p>
                            </div>
                        </div>
                    </body>
                </html>
            """

            # Send email to the user as a confirmation
            send_mail(
                'Thank you for contacting us!',
                strip_tags(user_confirmation_message),  # Plain text version
                settings.DEFAULT_FROM_EMAIL,  # Default sender (or use a custom email)
                [user_email],  # Send it to the user's email
                html_message=user_confirmation_message,  # HTML email content
                fail_silently=False,
            )

            return Response({"status": "Message sent successfully!"}, status=200)

        # If the data is invalid, return a 400 error with the validation errors
        return Response({"status": "Invalid data!", "errors": serializer.errors}, status=400)


class careerapi(APIView):
    permission_classes = [AllowAny]
    
    def post(self, request):
        # Deserialize data from the request
        serializer = careerserializers(data=request.data)
        
        if serializer.is_valid():
            # Extract validated data
            name = serializer.validated_data['name']
            email = serializer.validated_data['email']
            phone = serializer.validated_data['phone']
            jobTitle = serializer.validated_data['jobTitle']
            experience = serializer.validated_data['experience']
            jobtype = serializer.validated_data['jobtype']
            files = serializer.validated_data.get('files', None)

            # Construct file URL if provided
            files_url = f"{request.scheme}://{request.get_host()}{files.url}" if files else "No CV provided"
            
            # Prepare HTML message for the admin
            html_message = f"""
                <html>
                    <head>
                        <style>
                            body {{
                                font-family: Arial, sans-serif;
                                color: #333;
                                background-color: #f9f9f9;
                                padding: 20px;
                            }}
                            .container {{
                                max-width: 600px;
                                margin: 0 auto;
                                background-color: #fff;
                                padding: 20px;
                                border-radius: 8px;
                                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                            }}
                            .header {{
                                font-size: 24px;
                                color: #333;
                                margin-bottom: 10px;
                            }}
                            .content {{
                                font-size: 16px;
                                line-height: 1.5;
                            }}
                            .content p {{
                                margin-bottom: 10px;
                            }}
                            .footer {{
                                font-size: 12px;
                                color: #777;
                                text-align: center;
                                margin-top: 20px;
                            }}
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <h2 class="header">Message from Consulven IFSC</h2>
                            <div class="content">
                                <p><strong>Name:</strong> {name}</p>
                                <p><strong>Email:</strong> {email}</p>
                                <p><strong>Phone:</strong> {phone}</p>
                                <p><strong>Job Title:</strong> {jobTitle}</p>
                                <p><strong>Experience:</strong> {experience}</p>
                                <p><strong>Job Type:</strong><br>{jobtype}</p>
                                <p><strong>CV:</strong> {files_url}</p>
                            </div>
                            <div class="footer">
                                <p>Thank you for your inquiry. We will get back to you shortly.</p>
                            </div>
                        </div>
                    </body>
                </html>
            """
            plain_message = strip_tags(html_message)
            
            try:
                # Send email to the admin
                email_message = EmailMultiAlternatives(
                    'Message from Consulven IFSC[Contact Form]',
                    plain_message,
                    email,
                    [settings.CONTACT_EMAIL],
                    reply_to=[email],
                )
                email_message.attach_alternative(html_message, "text/html")
                email_message.send(fail_silently=False)

            except Exception as e:
                logger.error(f"Error sending email to admin: {e}")
                return Response({"status": "Error sending email to admin."}, status=500)

            # User confirmation email HTML
            user_confirmation_message = f"""
                <html>
                    <head>
                        <title>Thank You for Applying</title>
                        <style>
                            body {{
                                font-family: Arial, sans-serif;
                                color: #333;
                                background-color: #f9f9f9;
                                padding: 20px;
                            }}
                            .container {{
                                max-width: 600px;
                                margin: 0 auto;
                                background-color: #fff;
                                padding: 20px;
                                border-radius: 8px;
                                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                            }}
                            .header {{
                                font-size: 24px;
                                color: #333;
                                margin-bottom: 10px;
                            }}
                            .content {{
                                font-size: 16px;
                                line-height: 1.5;
                            }}
                            .footer {{
                                font-size: 12px;
                                color: #777;
                                text-align: center;
                                margin-top: 20px;
                            }}
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <h2 class="header">Thank You for Applying job at Consulven IFSC, {name}!</h2>
                            <div class="content">
                                <p>We have received your resume and will review it soon. Our team will get back to you as soon as possible with the next steps.</p>
                                <p>We appreciate your interest in Consulven IFSC and the opportunity to work together!</p>
                            </div>
                            <div class="footer">
                                <p>If you have any further questions, feel free to reach out.</p>
                                <p>In the meantime, feel free to <a href="https://www.consulvenifsc.com">visit our website</a> for more information about our company and services.</p>
                            </div>
                        </div>
                    </body>
                </html>
            """

            try:
                # Send email confirmation to the user
                send_mail(
                    'Thank you for contacting us!',
                    strip_tags(user_confirmation_message),  # Plain text version
                    settings.DEFAULT_FROM_EMAIL,
                    [email],  # Send to the user's email
                    html_message=user_confirmation_message,
                    fail_silently=False,
                )

            except Exception as e:
                logger.error(f"Error sending confirmation email: {e}")
                return Response({"status": "Error sending confirmation email."}, status=500)

            # Return successful response
            return Response({"status": "Message sent successfully!"}, status=200)

        # If the data is invalid, return a 400 error with the validation errors
        logger.error(f"Invalid data: {serializer.errors}")
        return Response({"status": "Invalid data!", "errors": serializer.errors}, status=400)
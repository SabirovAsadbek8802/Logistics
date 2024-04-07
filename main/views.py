import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect
from django.conf import settings
from .forms import ContactForm, ModalForm, FooterForm
from django.core.mail import send_mail
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.views import View
from django.contrib import messages

@csrf_exempt  # Temporarily disable CSRF protection for this view
def submit_form(request):
    if request.method == 'POST':
        fullname = request.POST.get('fullname')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        # Retrieve other form fields
        
        # Send email
        send_mail(
            'New Form Submission',
            f'Full Name: {fullname}\nEmail: {email}\nPhone: {phone}\n',  # Include other form fields
            'your_email@example.com',
            ['your_email@example.com'],
            fail_silently=False,
        )
        
        # Send SMS using Twilio or another service
        
        return HttpResponse("Form submitted successfully!")
    else:
        return HttpResponse("Only POST requests are allowed.")

# def send_sms(phone_number, message):
#     account_sid = settings.TWILIO_ACCOUNT_SID
#     auth_token = settings.TWILIO_AUTH_TOKEN
#     twilio_number = settings.TWILIO_PHONE_NUMBER

#     client = Client(account_sid, auth_token)

#     client.messages.create(
#         to=phone_number,
#         from_=twilio_number,
#         body=message
#     )

def send_email(email, message):
    smtp_server = settings.SMTP_SERVER
    smtp_port = settings.SMTP_PORT
    sender_email = settings.SENDER_EMAIL
    sender_password = settings.SENDER_PASSWORD
    receiver_email = settings.RECEIVER_EMAIL

    msg = MIMEMultipart()
    msg['From'] = sender_email
    msg['To'] = receiver_email
    msg['Subject'] = "New Customer Information"

    msg.attach(MIMEText(message, 'plain'))

    with smtplib.SMTP(smtp_server, smtp_port) as server:
        server.starttls()
        server.login(sender_email, sender_password)
        server.send_message(msg)

def home(request):
    if request.method == 'POST':
        form1 = ModalForm(request.POST)
        if form1.is_valid():
            email = form1.cleaned_data['email']
            phone_number = form1.cleaned_data['phone_number']

            message = f"New Customer Information: \n Email: {email}, Phone: {phone_number}"
            # send_sms("+998885108802", message)
            send_email(email, message)
            return HttpResponseRedirect('/') 
    else:
        form1 = ModalForm()
    return render(request, 'index.html', {'form1': form1})


class Home2View(View):
    def post(self, request):
        form2 = FooterForm(request.POST)
        if form2.is_valid():
            call_number = form2.cleaned_data['call_number']
            message_text = f"Help email: Phone: {call_number}"
            email = None
            send_email(email, message_text)
        else:
            messages.error(request, "Something went wrong !!")
        return redirect('home')

def about(request):
    return render(request, 'about.html')

def howitworks(request):
    return render(request, 'howitworks.html')

def request(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            email = form.cleaned_data['email']
            phone_number = form.cleaned_data['phone_number']
            fullname = form.cleaned_data['fullname']
            pick_up = form.cleaned_data['pick_up']
            delivery = form.cleaned_data['delivery']
            vehicle_type = form.cleaned_data['vehicle_type']
            transport_type = form.cleaned_data['transport_type']
            car_info = form.cleaned_data['car_info']

            message = f"Request Free Quote: \n Fullname: {fullname}, \n Phone: {phone_number},\n Pick up ZIP: {pick_up}, \n Delivery ZIP: {delivery}, \n Vehicle type: {vehicle_type}, \n Transport type: {transport_type}, \n Car information: {car_info}"
            send_email(email, message)
            return HttpResponseRedirect('/') 
    else:
        form = ContactForm()
    return render(request, 'request.html', {'form': form})

def services(request):
    return render(request, 'services.html')

def faq(request):
    return render(request, 'faq.html')

def blog(request):
    return render(request, 'blog.html')
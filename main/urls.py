from django.urls import path 
from .views import *

urlpatterns = [
    path('', home, name='home'),
    path('home2/', Home2View.as_view(), name='home2'),
    path('about-us/', about, name='about-us'),
    path('blog/', blog, name='blog'),
    path('how-it-works/', howitworks, name='howitworks'),
    path('request/', request, name='request'),
    path('services/', services, name='services'),
    path('faq/', faq, name='faq'),
]

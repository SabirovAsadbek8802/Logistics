from django import forms

class ModalForm(forms.Form):
    email = forms.EmailField(widget=forms.EmailInput(attrs={'class': 'modal__input'}), template_name='main/index.html')
    phone_number = forms.CharField(max_length=20, widget=forms.TextInput(attrs={'class': 'modal__input'}), template_name='main/index.html')  # Assuming phone number is a string

class ContactForm(forms.Form):
    email = forms.EmailField(widget=forms.EmailInput(attrs={'class': 'req_input email'}) ,template_name='main/request.html')
    phone_number = forms.CharField(max_length=20, widget=forms.TextInput(attrs={'class': 'req_input tel'}))  # Assuming phone number is a string
    fullname = forms.CharField(max_length=255, widget=forms.TextInput(attrs={'class': 'req_input'}), template_name='main/request.html')
    pick_up = forms.CharField(max_length=255, widget=forms.TextInput(attrs={'class': 'req_input'}), template_name='main/request.html')
    delivery = forms.CharField(max_length=255, widget=forms.TextInput(attrs={'class': 'req_input'}), template_name='main/request.html')
    vehicle_type = forms.CharField(max_length=255, widget=forms.TextInput(attrs={'class': 'req_input'}), template_name='main/request.html')
    transport_type = forms.CharField(max_length=255, widget=forms.TextInput(attrs={'class': 'req_input'}), template_name='main/request.html')
    car_info = forms.CharField(max_length=255, widget=forms.TextInput(attrs={'class': 'req_input'}), template_name='main/request.html')


class FooterForm(forms.Form):
    call_number = forms.CharField(max_length=20, widget=forms.TextInput(attrs={'class': 'input'}))
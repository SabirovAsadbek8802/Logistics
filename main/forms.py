from django import forms

class ModalForm(forms.Form):
    email = forms.EmailField(widget=forms.EmailInput(attrs={'class': 'modal__input'}))
    phone_number = forms.CharField(max_length=20, widget=forms.TextInput(attrs={'class': 'modal__input'}))  # Assuming phone number is a string

class ContactForm(forms.Form):
    email = forms.EmailField(widget=forms.EmailInput(attrs={'class': 'req_input email'}))
    phone_number = forms.CharField(max_length=20, widget=forms.TextInput(attrs={'class': 'req_input tel'}))  # Assuming phone number is a string
    fullname = forms.CharField(max_length=255, widget=forms.TextInput(attrs={'class': 'req_input'}))
    pick_up = forms.CharField(max_length=255, widget=forms.TextInput(attrs={'class': 'req_input'}))
    delivery = forms.CharField(max_length=255, widget=forms.TextInput(attrs={'class': 'req_input'}))
    vehicle_type = forms.CharField(max_length=255, widget=forms.TextInput(attrs={'class': 'req_input'}))
    transport_type = forms.CharField(max_length=255, widget=forms.TextInput(attrs={'class': 'req_input'}))
    car_info = forms.CharField(max_length=255, widget=forms.TextInput(attrs={'class': 'req_input'}))


class FooterForm(forms.Form):
    call_number = forms.CharField(max_length=20, widget=forms.TextInput(attrs={'class': 'input'}))
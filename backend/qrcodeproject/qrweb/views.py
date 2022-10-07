from django.shortcuts import render,HttpResponse
from django_otp.oath import totp
import time


# Create your views here

def generate_otp(request):
    secret_key = b'12345678901234567890'
    now = int(time.time())
    for delta in range(10,110,20):
        print(totp(key=secret_key, step=10, digits=6, t0=(now-delta)))
    response = {
        'status': 'success',
    }
    return HttpResponse(response['status'])
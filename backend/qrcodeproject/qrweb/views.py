from django.shortcuts import render,HttpResponse
from django_otp.oath import totp
import time
import json

# Create your views here

def generate_otp(request):
    secret_key = b'12345678901234567890'
    now = int(time.time())
    x = totp(key=secret_key, step=10, digits=6, t0=(now-10))
    print(x)
    response = {
        'status': 'success',
    }
    return HttpResponse(json.dumps(response))

def is_correct(request):
    ans = {
        'status1': 'Correct',
        'status2': 'incorrect',
    }
    secret_key = b'12345678901234567890'
    now = int(time.time())
    x = totp(key=secret_key, step=10, digits=6, t0=(now-10))
    if x==request.GET['OTP']:
        return HttpResponse(json.dumps(ans['status1']))
    else:
        return HttpResponse(json.dumps(ans['status2']))
from django.urls import path
from. import views

urlpatterns = [
    path('',views.generate_otp,name='otp_generate'),
    path('',views.is_correct,name='correct_otp'),
]
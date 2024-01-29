from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from .serializers import MessageSerializer
from .models import Message

# Create your views here.

class MessageView(generics.ListAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer


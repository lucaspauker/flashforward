from rest_framework import serializers
from .models import ContactResponse, EmailListResponse

class ContactResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactResponse
        fields = ('id', 'name', 'email', 'message')

class EmailListResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmailListResponse
        fields = ('id', 'name', 'email')

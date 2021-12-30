from rest_framework import serializers
from .models import ContactResponse

class ContactResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactResponse
        fields = ('id', 'name', 'email', 'message')

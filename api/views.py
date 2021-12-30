from django.shortcuts import render

# Create your views here.

from .models import ContactResponse
from .serializers import ContactResponseSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

class ContactResponseView(APIView):
    def get(self, request):
        responses = ContactResponse.objects.all()
        return Response({"responses": responses})

    def post(self, request):
        serializer = ContactResponseSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({"status": "error", "data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


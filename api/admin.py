from django.contrib import admin

# Register your models here.

from .models import ContactResponse, EmailListResponse

admin.site.register(ContactResponse)
admin.site.register(EmailListResponse)

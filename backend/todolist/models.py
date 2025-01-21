from django.db import models
from django.conf import settings

class Todo(models.Model):
    content = models.CharField(max_length=50)
    completed_on = models.DateTimeField(auto_now=False, auto_now_add=False)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

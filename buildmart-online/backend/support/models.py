from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class UserActivity(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    path = models.CharField(max_length=255)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user} visited {self.path}" if self.user else f"Anon visited {self.path}"

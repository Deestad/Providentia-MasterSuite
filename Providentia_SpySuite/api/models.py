from django.db import models

# Create your models here.
class Message(models.Model):
    message_id = models.CharField(max_length=16, default="")
    message_timestamp = models.DateTimeField()
    message_content = models.TextField()
    author_id = models.CharField(max_length=16, default="")



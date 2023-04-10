from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):
    username = models.CharField(max_length=250)
    email = models.CharField(max_length=250, unique=True)
    password = models.CharField(max_length=250)
    profile_img = models.ImageField(upload_to='profile',blank=True, null=True)

    is_active = models.BooleanField(default=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']


class Notes(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=250)
    rating = models.IntegerField()

    def __str__(self):
        return self.title

from django.db import models

#Source learned from:
#https://www.geeksforgeeks.org/how-to-connect-django-with-reactjs/

# Create your models here.
class React(models.Model):
    language = models.CharField(max_length=30,null="Language")
    description = models.CharField(max_length=500,null="Description")

class InterestingReact(models.Model):
    programmingLanguage = models.CharField(max_length=30,null="Programming Language")
    applications = models.CharField(max_length=500,null="Description")
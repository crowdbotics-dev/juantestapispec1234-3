from django.conf import settings
from django.db import models
class NewMo(models.Model):
    'Generated Model'
    value = models.BigIntegerField()
class Rojo(models.Model):
    'Generated Model'
    name = models.BigIntegerField()
    value2 = models.BigIntegerField()
    valuew = models.BigIntegerField()
class Stanley(models.Model):
    'Generated Model'
    mate = models.EmailField(max_length=254,)

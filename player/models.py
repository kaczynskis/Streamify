from django.conf import settings
from django.db import models
from django.utils import timezone


class Song(models.Model):
    artist = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    published_date = models.DateTimeField(default=timezone.now)
    songfile = models.FileField(blank=False)
    duration = models.FloatField()
    # isPlaying = False

    def publish(self):
        self.save()

    # donate
    # like/dislike
    # play/pause

    def __str__(self):
        return self.title

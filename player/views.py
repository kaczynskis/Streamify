from django.shortcuts import render
from django.utils import timezone
from .models import Song

# Create your views here.


def index(request):
    #songs = Song.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    songs = Song.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    return render(request, 'interface/index.html', {'songs': songs})

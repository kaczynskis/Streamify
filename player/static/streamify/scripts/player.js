const albumCover = document.querySelector('#albumCover');
const song = document.querySelector('#song');
const songArtist = document.querySelector('.song-artist');
const songTitle = document.querySelector('.song-title');
const progressBar = document.querySelector('#progress-bar');
let pPause = document.querySelector('#play-pause');

//In the future, this will be removed and song data will be accessed from our SQL database.
songIndex = 0;
songs = ['assets/media/Summertime.mp3', 'assets/media/wait.mp3'];
albumCovers = ['assets/cuco.jpg', 'assets/maroon5.jpg'];
songArtists = ['Cuco', 'Maroon 5'];
songTitles = ["Summertime", "Wait"];

let isPlaying = true;
function playPause() {
    if (isPlaying) {
        const song = document.querySelector('#song'),
        albumCover = document.querySelector('#albumCover');
        pPause.src = "assets/pause.png"
        song.play();
        isPlaying = false;
    } else {
        pPause.src = "assets/play.png"
        song.pause();
        isPlaying = true;
    }
}

song.addEventListener('ended', function(){
    nextSong();
});

function nextSong() {
    songIndex++;
    if (songIndex > 1) {
        songIndex = 0;
    };
    song.src = songs[songIndex];
    albumCover.src = albumCovers[songIndex];
    songArtist.innerHTML = songArtists[songIndex];
    songTitle.innerHTML = songTitles[songIndex];
    isPlaying = true;
    playPause();
}

function previousSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = 1;
    };
    song.src = songs[songIndex];
    albumCover.src = albumCovers[songIndex];
    songArtist.innerHTML = songArtists[songIndex];
    songTitle.innerHTML = songTitles[songIndex];
    isPlaying = true;
    playPause();
}

function updateProgressValue() {
    progressBar.max = song.duration;
    progressBar.value = song.currentTime;
    document.querySelector('.currentTime').innerHTML = (formatTime(Math.floor(song.currentTime)));
    if (document.querySelector('.durationTime').innerHTML === "NaN:NaN") {
        document.querySelector('.durationTime').innerHTML = "0:00";
    } else {
        document.querySelector('.durationTime').innerHTML = (formatTime(Math.floor(song.duration)));
    }
};

function formatTime(seconds) {
    let min = Math.floor((seconds / 60));
    let sec = Math.floor(seconds - (min * 60));
    if (sec < 10){
        sec  = `0${sec}`;
    };
    return `${min}:${sec}`;
};

setInterval(updateProgressValue, 500);

function changeProgressBar() {
    song.currentTime = progressBar.value;
};

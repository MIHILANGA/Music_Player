// script.js
const songs = [
    {
        title: "Song 1",
        artist: "Artist 1",
        src: "song1.mp3"
    },
    {
        title: "Song 2",
        artist: "Artist 2",
        src: "song2.mp3"
    },
    {
        title: "Song 3",
        artist: "Artist 3",
        src: "song3.mp3"
    }
];

let currentSongIndex = 0;
const audioPlayer = document.getElementById('audio-player');
const songTitle = document.getElementById('song-title');
const songArtist = document.getElementById('song-artist');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function loadSong(songIndex) {
    const song = songs[songIndex];
    audioPlayer.src = song.src;
    songTitle.innerText = song.title;
    songArtist.innerText = song.artist;
}

function playSong() {
    audioPlayer.play();
    playBtn.innerText = 'Pause';
}

function pauseSong() {
    audioPlayer.pause();
    playBtn.innerText = 'Play';
}

function togglePlayPause() {
    if (audioPlayer.paused) {
        playSong();
    } else {
        pauseSong();
    }
}

function playNextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    playSong();
}

function playPrevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    playSong();
}

playBtn.addEventListener('click', togglePlayPause);
nextBtn.addEventListener('click', playNextSong);
prevBtn.addEventListener('click', playPrevSong);

loadSong(currentSongIndex);

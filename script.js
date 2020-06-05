let songs = ['Song1.mp3','Song2.mp3','Song3.mp3'];
let poster = ['Poster1.jpg','Poster2.jpg','Poster3.jpg'];

let songTitle = document.getElementById('songTitle');
let fillBar = document.getElementById('fill');

let song = new Audio('Song1.mp3');
let currentSong = 0;
let button = document.getElementById('play').addEventListener('click', function () {     // ФУНКЦИЯ ПРИ НАЖАТИИ НА КНОПКУ 'PLAY' ИГРАЕТ МУЗЫКА
    if (button === false) {
        button = true;
        song.src = songs[currentSong];

        songTitle.textContent = songs[currentSong];

        song.play();
    }
})

function changeButton() {                     // МЕНЯЕТ КНОПКУ 'PLAY'
    if (song.paused) {
        song.play();
        $('#play').html('<i class="fa fa-pause"></i>')
    }
    else {
        song.pause();
        $('#play').html('<i class="fa fa-play"></i>')
    }
}

song.addEventListener('timeupdate', function () { // ДВИГАЕТ ВРЕМЯ МУЗЫКИ
    let position = song.currentTime / song.duration;
    fillBar.style.width = position * 100 + '%';
})


function next() { // КНОПКА "СЛЕД. МУЗЫКА"
    currentSong++;
    if (currentSong > 3) {
        currentSong = 0;
    }
    song.pause();
    $('#play').html('<i class="fa fa-play"></i>');
    $('#image img').attr("src", poster[currentSong]);
    $('#bg img').attr('src', poster[currentSong]);
}
function pre() { // КНОПКА "СЛЕД. МУЗЫКА"
    currentSong--;
    if (currentSong > 3) {
        currentSong = 0;
    }
    song.pause();
    $('#play').html('<i class="fa fa-play"></i>');
    $('#image img').attr("src", poster[currentSong]);
    $('#bg img').attr('src', poster[currentSong]);
}
let songs = [
    new Audio('Music/Song1.mp3'),
    new Audio('Music/Song2.mp3'),
    new Audio('Music/Song3.mp3'),
    new Audio('Music/Song4.mp3'),
    new Audio('Music/Song5.mp3'),
    new Audio('Music/Song6.mp3'),
    new Audio('Music/Song7.mp3'),
    new Audio('Music/Song8.mp3'),
    new Audio('Music/Song9.mp3'),
    new Audio('Music/Song10.mp3'),
    new Audio('Music/Song11.mp3'),
    new Audio('Music/Song12.mp3'),
];
let nameSongs = [
    'Zippo - Иконы',
    'Slame - Polaroid',
    'Yug - Темнота',
    'ЛСП MDee - Весновка-Ушача',
    'Мэвл - Холодок',
    'Madishka - Куда несет дым ',
    'Groove - Твоей девочке 16',
    'Kavabanga Depo kolibri - Амфетамин',
    'Ramil - Вся такая в белом',
    'Kavabanga Depo kolibri - Нет новостей',
    'Егор Крид - Грехи (при уч. Клава Кока)',
    'Клава Кока MORGENSHTERN - Мне пох'
];
let poster = [
    'img/Poster1.jpg',
    'img/Poster2.jpg',
    'img/Poster3.jpg',
    'img/Poster4.jpg',
    'img/Poster5.jpg',
    'img/Poster6.jpg',
    'img/Poster7.jpg',
    'img/Poster8.jpg',
    'img/Poster9.jpg',
    'img/Poster10.jpg',
    'img/Poster11.jpg',
    'img/Poster12.jpg'
];

let songTitle = document.getElementById('songTitle');
let fillBar = document.getElementById('fill');
let currentTime = document.getElementById('currentTime');

let currentSong = 0;

let button = document.getElementById('play').addEventListener('click', function () {     // ФУНКЦИЯ ПРИ НАЖАТИИ НА КНОПКУ 'PLAY' ИГРАЕТ МУЗЫКА
    if (button === false) {
        button = true;
        songs.src = songs[currentSong];
        songs[currentSong].play();
    }
    songTitle.textContent =  nameSongs[currentSong];
})

function changeButton() {                     // МЕНЯЕТ КНОПКУ 'PLAY'
    if (songs[currentSong].paused) {
        songs[currentSong].play();
        $('#play').html('<i class="fa fa-pause"></i>');
    }
    else {
        songs[currentSong].pause();
        $('#play').html('<i class="fa fa-play"></i>');
    }
}
songs.map(song => {
    song.addEventListener('timeupdate', function () { // ДВИГАЕТ ВРЕМЯ МУЗЫКИ
        let position = songs[currentSong].currentTime / songs[currentSong].duration;
        fillBar.style.width = position * 100 + '%';

        convertTime(Math.round(song.currentTime));
    })
})

function convertTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;

    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    currentTime.textContent = min + ":" + sec;

    totalTime(Math.round(songs[currentSong].duration));
}
function totalTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;

    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    currentTime.textContent += " / " + min + ":" + sec;
}

    function next() { // КНОПКА "СЛЕД. МУЗЫКА"
        songs[currentSong].pause();
        currentSong++;
        if (currentSong > 11) {
            currentSong = 0;
        }
        $('#play').html('<i class="fa fa-play"></i>'); // Меняет "Play"при нажатии на "След. музыка"
        $('#image img').attr("src", poster[currentSong]); // Меняет картинку в самом плеере
        $('#bg img').attr('src', poster[currentSong]); // Меняет фон сзади
        songTitle.textContent = nameSongs[currentSong]; // Текст песни прослеживает
    }

    function pre() { // КНОПКА "СЛЕД. МУЗЫКА"
        songs[currentSong].pause();
        currentSong--;
        if (currentSong < 0) {
            currentSong = 0;
            alert('А всё, а вот всё... Всё... Нет предыдущих песен.')
        }
        $('#play').html('<i class="fa fa-play"></i>'); // Меняет "Play"при нажатии на "След. музыка"
        $('#image img').attr("src", poster[currentSong]); // Меняет картинку в самом плеере
        $('#bg img').attr('src', poster[currentSong]); // Меняет фон сзади
        songTitle.textContent = nameSongs[currentSong]; // Текст песни прослеживает
    }

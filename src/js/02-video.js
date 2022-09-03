import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const iframePlayer = new Player(iframe);

// Вешаем слушателя события callback функцией .on ()
iframePlayer.on('timeupdate', throttle(onTimeUpdate, 1000));

//Сохраняем время воспроизведения в локальное хранилище
function onTimeUpdate(params) {
  localStorage.setItem('videoplayer-current-time', params.seconds);
}

const savedTime = localStorage.getItem('videoplayer-current-time');
console.log(savedTime);

if (savedTime) {
  setCurrentTime();
}

function onPlay({ seconds }) {
  localStorage.setItem(savedTime, seconds);
}

function setCurrentTime() {
  iframePlayer.setCurrentTime(savedTime);
}

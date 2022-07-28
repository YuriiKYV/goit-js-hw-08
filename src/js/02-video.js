import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = "feedback-form-state";
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (data) {
    localStorage.setItem(LOCALSTORAGE_KEY, data.seconds)
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY));
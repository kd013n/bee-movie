var aud = document.getElementById('theme').children[0];
var speakerIcon = document.getElementById('speaker');
var isPlaying = false;
aud.pause();

function playPause() {
  if (isPlaying) {
    aud.pause();
    speakerIcon.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Mute_Icon.svg');

  } else {
    aud.play();
    speakerIcon.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/2/21/Speaker_Icon.svg');
  }
  isPlaying = !isPlaying;
}

const stars = 400;

for (let i =0; i < stars; i++) {
    let star = document.createElement("div");
    star.className = 'stars';
    var xy = randomPosition();
    star.style.top = xy[0] + 'px';
    star.style.left = xy[1] + 'px';
    document.body.append(star);
};

function randomPosition() {
    var y = window.innerWidth;
    var x = window.innerHeight;
    var randomX = Math.floor(Math.random() * x);
    var randomY = Math.floor(Math.random() * y);
    return [randomX, randomY];
};
var sources = [
    "https://us4.internet-radio.com/proxy/wsjf?mp=/stream", // jazz
    "https://uk3.internet-radio.com/proxy/majesticjukebox?mp=/live", // Cool
    "https://ice7.securenetsystems.net/KMXE", // Classic Rock
    "https://uk2.internet-radio.com/proxy/danceradiouk?mp=/stream;", // EDM
    "https://edge4.peta.live365.net/b05055_128mp3" // Chill
];

var playingIndex = 0; // current radio
var playing = true; // stream status
var music = null;

setTimeout(function() {
    loadStream(playingIndex);
}, 1);

function loadStream(index) {
    if (playing && music !== null)
        destroyStream();

    music = new Audio();
    music.src = sources[index];
    music.load();
    music.play();
    pauseIcon();
    playingIndex = index;
    playing = true;
}

function destroyStream() {
    music.pause();
    music.src = "";
    playIcon();
    playing = false;
}

function changePlayback() {
    if (playing) { destroyStream(); } else { loadStream(playingIndex); }
}

// function setLabel(index) {
//     document.getElementById("label").innerHTML = '<h6> <a target="_blank" href="' + labels[index][1] + '">' + labels[index][0] + '</a></h6>';
// }

document.onkeydown = function(e) {
    e = e || window.event;
    switch (e.which || e.keyCode) {
        case 32:
            changePlayback();
            break;
    }
};

// icons
function pauseIcon() {
    document.getElementById('playbackButton').className = 'icon fa-pause';
}

function playIcon() {
    document.getElementById('playbackButton').className = 'icon fa-play';
}
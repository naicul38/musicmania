var sources = [
    "https://us4.internet-radio.com/proxy/wsjf?mp=/stream", // jazz
    "http://198.178.123.17:10922/;stream/1", // Coolies
    "https://us5.internet-radio.com/proxy/wcrr?mp=/stream;", // Classic Rock
    "http://pulseedm.cdnstream1.com:8124/1373_128" // EDM
];

var labels = [
    ["Lounge", "http://www.smoothjazzflorida.com/"],
    ["70s", "http://70sradiohits.com/"],
    ["Rock", "http://www.ClassicRockRadio.online"],
    ["Party", "https://www.internet-radio.com/station/edmpulse/"]
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
    setLabel(index);
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

function setLabel(index) {
    document.getElementById("label").innerHTML = '<h6> <a target="_blank" href="' + labels[index][1] + '">' + labels[index][0] + '</a></h6>';
}

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
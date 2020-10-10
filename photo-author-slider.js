$.ajax("photo_list.json", function(data) {
    var images = JSON.parse(data);
});

function changeImage() {
    imageHead.style.backgroundImage = "url(" + Object.values(images)[i].url + ")";
    var author = Object.values(images)[i].name;
    document.getElementById("authorname").innerHTML = author;
    i = i + 1;
    if (i == images.length) {
        i = 0;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
var imageHead = document.getElementById("bg");

var i = getRandomInt(images.length);
changeImage();
setInterval(changeImage, 15000);
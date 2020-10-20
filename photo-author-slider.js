function changeImage() {
    imageHead.style.backgroundImage = "url(" + Object.values(images)[i].url + ")";
    var author = Object.values(images)[i].name;
    var author_url = Object.values(images)[i].author_url;
    document.getElementById("authorname").innerHTML = author;
    document.getElementById("authorname").href = author_url;
    i = i + 1;
    if (i == images.length) {
        i = 0;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
var imageHead = document.getElementById("bg");
var images = [{"url": "https://images.unsplash.com/photo-1492632503949-a31d9972b400?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Marvin Meyer", "author_url": "https://unsplash.com/@marvelous"}, {"url": "https://images.unsplash.com/photo-1526346698789-22fd84314424?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Elle Hughes", "author_url": "https://unsplash.com/@elletakesphotos"}, {"url": "https://images.unsplash.com/photo-1494376863055-e18dd6c6841a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Chris Rhoads", "author_url": "https://unsplash.com/@cwrhoads"}, {"url": "https://images.unsplash.com/photo-1494358856891-c9a46d446c39?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Armando Ascorve Morales", "author_url": "https://unsplash.com/@armandoascorve"}, {"url": "https://images.unsplash.com/photo-1468386150076-13c9d6fff68b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "John King", "author_url": "https://unsplash.com/@johnking"}, {"url": "https://images.unsplash.com/photo-1523861751938-121b5323b48b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Ricardo Gomez Angel", "author_url": "https://unsplash.com/@ripato"}, {"url": "https://images.unsplash.com/photo-1472721457610-d040f398d2fa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "v2osk", "author_url": "https://unsplash.com/@v2osk"}, {"url": "https://images.unsplash.com/photo-1496347315686-5f274d046ccc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Joshua Newton", "author_url": "https://unsplash.com/@joshuanewton"}, {"url": "https://images.unsplash.com/photo-1506902039157-1a7e7374b077?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Cl\u00e9ment Philippe", "author_url": "https://unsplash.com/@clementph"}, {"url": "https://images.unsplash.com/photo-1484766702789-cd34181a7300?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Siriwan Srisuwan", "author_url": "https://unsplash.com/@siriwan"}, {"url": "https://images.unsplash.com/photo-1484943244867-fa64d4ed9486?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Siriwan Srisuwan", "author_url": "https://unsplash.com/@siriwan"}, {"url": "https://images.unsplash.com/photo-1517825527975-311cb1ba6b16?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Pars Sahin", "author_url": "https://unsplash.com/@byadoniaa"}, {"url": "https://images.unsplash.com/photo-1518546488314-6ed28acc48e3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "sutirta budiman", "author_url": "https://unsplash.com/@sutirtab"}, {"url": "https://images.unsplash.com/photo-1458060390477-1b8bc1cfe017?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Milada Vigerova", "author_url": "https://unsplash.com/@mili_vigerova"}, {"url": "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "emy", "author_url": "https://unsplash.com/@grimnoire"}, {"url": "https://images.unsplash.com/photo-1445820258694-73a1d5609fb9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Dominik Lange", "author_url": "https://unsplash.com/@the_real_napster"}, {"url": "https://images.unsplash.com/photo-1495556614554-6d268cee358a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Cristian Grecu", "author_url": "https://unsplash.com/@taguwan"}, {"url": "https://images.unsplash.com/photo-1509294798403-722451cb45b7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Patrick Selin", "author_url": "https://unsplash.com/@patuphotos"}, {"url": "https://images.unsplash.com/photo-1496733570428-49657ca2f9cf?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "reza shayestehpour", "author_url": "https://unsplash.com/@r_shayesrehpour"}, {"url": "https://images.unsplash.com/photo-1528838960044-8ed8dd43b8fc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Ece G\u00f6k\u00e7er", "author_url": "https://unsplash.com/@madamecemu"}, {"url": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Dino Reichmuth", "author_url": "https://unsplash.com/@dinoreichmuth"}, {"url": "https://images.unsplash.com/photo-1465385076216-9288f6f0584b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Athena Lam", "author_url": "https://unsplash.com/@thecupandtheroad"}, {"url": "https://images.unsplash.com/photo-1483134529756-b49663dd81cf?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "V\u00edctor Jes\u00fas Carrasco", "author_url": "https://unsplash.com/@vjco"}, {"url": "https://images.unsplash.com/photo-1498107955204-2c0d22dfce3a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Freddie Collins", "author_url": "https://unsplash.com/@visuals_by_fred"}, {"url": "https://images.unsplash.com/photo-1453167710320-151adc31f6d5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "McKinley Law", "author_url": "https://unsplash.com/@mckinleylaw"}, {"url": "https://images.unsplash.com/photo-1483521359264-7b4d6d71b123?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Johannes W", "author_url": "https://unsplash.com/@johanneswre"}, {"url": "https://images.unsplash.com/photo-1495610239084-8ebb5e3fa9c8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "NeONBRAND", "author_url": "https://unsplash.com/@neonbrand"}, {"url": "https://images.unsplash.com/photo-1517176191003-46c068487dd4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Savvas Kalimeris", "author_url": "https://unsplash.com/@savvas_kalimeris"}, {"url": "https://images.unsplash.com/photo-1521222966575-a8ac5b288035?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Matthias Neufeld", "author_url": "https://unsplash.com/@maneu"}, {"url": "https://images.unsplash.com/photo-1518364538800-6bae3c2ea0f2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Bill Jelen", "author_url": "https://unsplash.com/@billjelen"}];
var i = getRandomInt(images.length);
changeImage();
setInterval(changeImage, 15000);
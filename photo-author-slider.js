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
var images = [{"url": "https://images.unsplash.com/photo-1508361001413-7a9dca21d08a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "David Menidrey", "author_url": "https://unsplash.com/@cazault"}, {"url": "https://images.unsplash.com/photo-1509557965875-b88c97052f0e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "NeONBRAND", "author_url": "https://unsplash.com/@neonbrand"}, {"url": "https://images.unsplash.com/photo-1572470568265-4431ad3b2328?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "\u00c5\ufffdukasz Nie\u00c5\u203acioruk", "author_url": "https://unsplash.com/@luki90pl"}, {"url": "https://images.unsplash.com/photo-1505904645664-def2335fb0d4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Ehud Neuhaus", "author_url": "https://unsplash.com/@paramir"}, {"url": "https://images.unsplash.com/photo-1481819434877-23b892ca68ff?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Neven Krcmarek", "author_url": "https://unsplash.com/@nevenkrcmarek"}, {"url": "https://images.unsplash.com/photo-1477516561410-f0b5dd8319e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Beth Teutschmann", "author_url": "https://unsplash.com/@teutschmann"}, {"url": "https://images.unsplash.com/photo-1572196201896-fcfd5b5a5afe?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Andyone", "author_url": "https://unsplash.com/@andyoneru"}, {"url": "https://images.unsplash.com/photo-1476283721796-dd935b062838?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Toa Heftiba", "author_url": "https://unsplash.com/@heftiba"}, {"url": "https://images.unsplash.com/photo-1508931133503-b1944a4ecdd5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "freestocks", "author_url": "https://unsplash.com/@freestocks"}, {"url": "https://images.unsplash.com/photo-1540593151139-583128ef5a84?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Paige Cody", "author_url": "https://unsplash.com/@paige_cody"}, {"url": "https://images.unsplash.com/photo-1541550353839-95e417a9f95b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Colton Sturgeon", "author_url": "https://unsplash.com/@coltonsturgeon"}, {"url": "https://images.unsplash.com/photo-1572860177022-8fda92a90c95?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Szab\u00c3\u00b3 J\u00c3\u00a1nos", "author_url": "https://unsplash.com/@szabojani"}, {"url": "https://images.unsplash.com/photo-1474591424615-7fe467c7fac9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Blaz Photo", "author_url": "https://unsplash.com/@blazphoto"}, {"url": "https://images.unsplash.com/photo-1492515114975-b062d1a270ae?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Nicolas Picard", "author_url": "https://unsplash.com/@artnok"}, {"url": "https://images.unsplash.com/photo-1503416997304-7f8bf166c121?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Mark Tegethoff", "author_url": "https://unsplash.com/@tegethoff"}, {"url": "https://images.unsplash.com/photo-1575508708196-e0b3417f3f30?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Maciej Karo\u00c5\u201e", "author_url": "https://unsplash.com/@maciejka_dslr"}, {"url": "https://images.unsplash.com/photo-1481018085669-2bc6e4f00eed?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "J\u00c3\u00a1n Jakub Nani\u00c5\u00a1ta", "author_url": "https://unsplash.com/@janjakubnanista"}, {"url": "https://images.unsplash.com/photo-1477659803863-c1bf91b34c90?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "freestocks", "author_url": "https://unsplash.com/@freestocks"}, {"url": "https://images.unsplash.com/photo-1479762937580-3b682a10a0d8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "John Silliman", "author_url": "https://unsplash.com/@john_silliman"}, {"url": "https://images.unsplash.com/photo-1572971916307-8cf6b4f5200d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "David Edkins", "author_url": "https://unsplash.com/@romebaby"}, {"url": "https://images.unsplash.com/photo-1508298593117-02b95f83abca?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Mark Duffel", "author_url": "https://unsplash.com/@2mduffel"}, {"url": "https://images.unsplash.com/photo-1571680008086-5d37dffeffb3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Alex Simpson", "author_url": "https://unsplash.com/@m_simpsan"}, {"url": "https://images.unsplash.com/photo-1499578124509-1611b77778c8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Ganapathy Kumar", "author_url": "https://unsplash.com/@gkumar2175"}, {"url": "https://images.unsplash.com/photo-1572547743423-2ecefec28993?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Call Me Fred", "author_url": "https://unsplash.com/@callmefred"}, {"url": "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Stefano Pollio", "author_url": "https://unsplash.com/@stefanopollio"}, {"url": "https://images.unsplash.com/photo-1509031026348-6e193b732386?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Drew Hays", "author_url": "https://unsplash.com/@drew_hays"}, {"url": "https://images.unsplash.com/photo-1568331704166-6214f152d98c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Sarah Gualtieri", "author_url": "https://unsplash.com/@sarahjgualtieri"}, {"url": "https://images.unsplash.com/photo-1528041463072-2df544cbbb9a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Mel Poole", "author_url": "https://unsplash.com/@melipoole"}, {"url": "https://images.unsplash.com/photo-1507486435406-33d376619b3d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Ricardo Gomez Angel", "author_url": "https://unsplash.com/@ripato"}, {"url": "https://images.unsplash.com/photo-1503431128871-cd250803fa41?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Hannah Troupe", "author_url": "https://unsplash.com/@htroupe"}];
var i = getRandomInt(images.length);
changeImage();
setInterval(changeImage, 15000);
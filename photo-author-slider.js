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
var images = [{"url": "https://images.unsplash.com/photo-1538883689728-2c32af36a313?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Priscilla Du Preez", "author_url": "https://unsplash.com/@priscilladupreez"}, {"url": "https://images.unsplash.com/photo-1510194638421-92f54ce46444?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Pro Church Media", "author_url": "https://unsplash.com/@prochurchmedia"}, {"url": "https://images.unsplash.com/photo-1509456592530-5d38e33f3fdd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Element5 Digital", "author_url": "https://unsplash.com/@element5digital"}, {"url": "https://images.unsplash.com/photo-1539075885173-2c049634df4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Joanna Kosinska", "author_url": "https://unsplash.com/@joannakosinska"}, {"url": "https://images.unsplash.com/photo-1506202687253-52e1b29d3527?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Timothy Eberly", "author_url": "https://unsplash.com/@timothyeberly"}, {"url": "https://images.unsplash.com/photo-1505682750263-f3f9e519c565?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Patrick Fore", "author_url": "https://unsplash.com/@patrickian4"}, {"url": "https://images.unsplash.com/photo-1574672281706-24413c7e8920?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "\u011f\u0178\u2021\u00a8\u011f\u0178\u2021\u00ad Claudio Schwarz | @purzlbaum", "author_url": "https://unsplash.com/@purzlbaum"}, {"url": "https://images.unsplash.com/photo-1510195429239-8a5c0222144a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Pro Church Media", "author_url": "https://unsplash.com/@prochurchmedia"}, {"url": "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Chris Lawton", "author_url": "https://unsplash.com/@chrislawton"}, {"url": "https://images.unsplash.com/photo-1503610594381-aed30c818b8e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Simon Maage", "author_url": "https://unsplash.com/@simonmaage"}, {"url": "https://images.unsplash.com/photo-1570574849479-0ee510db367c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Eric Tompkins", "author_url": "https://unsplash.com/@joekiddart"}, {"url": "https://images.unsplash.com/photo-1481127950397-88e4c4f4b83b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Jakob Owens", "author_url": "https://unsplash.com/@jakobowens1"}, {"url": "https://images.unsplash.com/photo-1538883855924-aa6be412f336?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Priscilla Du Preez", "author_url": "https://unsplash.com/@priscilladupreez"}, {"url": "https://images.unsplash.com/photo-1542653357-c41d35e87f82?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Preslie Hirsch", "author_url": "https://unsplash.com/@heypreslie"}, {"url": "https://images.unsplash.com/photo-1514064019862-23e2a332a6a6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Erol Ahmed", "author_url": "https://unsplash.com/@erol"}, {"url": "https://images.unsplash.com/photo-1573017714772-9e1a0f92d734?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Meritt Thomas", "author_url": "https://unsplash.com/@merittthomas"}, {"url": "https://images.unsplash.com/photo-1571030701211-aa96da577e91?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Priscilla Du Preez", "author_url": "https://unsplash.com/@priscilladupreez"}, {"url": "https://images.unsplash.com/photo-1542318572-4cfac027838a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Debby Hudson", "author_url": "https://unsplash.com/@hudsoncrafted"}, {"url": "https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "\u011f\u0178\u2021\u00a8\u011f\u0178\u2021\u00ad Claudio Schwarz | @purzlbaum", "author_url": "https://unsplash.com/@purzlbaum"}, {"url": "https://images.unsplash.com/photo-1449962887303-b4a91c7c560a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Joanna Kosinska", "author_url": "https://unsplash.com/@joannakosinska"}, {"url": "https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Brooke Lark", "author_url": "https://unsplash.com/@brookelark"}, {"url": "https://images.unsplash.com/photo-1541480333465-b09786ad8ac6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Joseph Gonzalez", "author_url": "https://unsplash.com/@miracletwentyone"}, {"url": "https://images.unsplash.com/photo-1509460691319-135d8cfa14f9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Element5 Digital", "author_url": "https://unsplash.com/@element5digital"}, {"url": "https://images.unsplash.com/photo-1454129170132-347ea87dc9dd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Anthony Lee", "author_url": "https://unsplash.com/@anthonyrossbach"}, {"url": "https://images.unsplash.com/photo-1507239661603-c6251d087b94?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Beth Rufener", "author_url": "https://unsplash.com/@creatifolio"}, {"url": "https://images.unsplash.com/photo-1520869309377-88c9274a27c2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Hannah Busing", "author_url": "https://unsplash.com/@hannahbusing"}, {"url": "https://images.unsplash.com/photo-1507783548227-544c3b8fc065?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Timothy Eberly", "author_url": "https://unsplash.com/@timothyeberly"}, {"url": "https://images.unsplash.com/photo-1509461399763-ae67a981b254?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Element5 Digital", "author_url": "https://unsplash.com/@element5digital"}, {"url": "https://images.unsplash.com/photo-1520869578617-557561d7b114?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Hannah Busing", "author_url": "https://unsplash.com/@hannahbusing"}, {"url": "https://images.unsplash.com/photo-1456404823214-a69ef7a1fae5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Gabriel Garcia Marengo", "author_url": "https://unsplash.com/@gabrielgm"}];
var i = getRandomInt(images.length);
changeImage();
setInterval(changeImage, 15000);
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
var images = [{"url": "https://images.unsplash.com/photo-1589717319952-e97c8bf7c52e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Ferdinand studio", "author_url": "https://unsplash.com/@ferdinandstudio"}, {"url": "https://images.unsplash.com/photo-1583139937725-8ccafdb2db1b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Dainis Graveris", "author_url": "https://unsplash.com/@dainisgraveris"}, {"url": "https://images.unsplash.com/photo-1519668752166-ebdbfe986afd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Alexander Krivitskiy", "author_url": "https://unsplash.com/@krivitskiy"}, {"url": "https://images.unsplash.com/photo-1593309403125-e586d2e74c81?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Dainis Graveris", "author_url": "https://unsplash.com/@dainisgraveris"}, {"url": "https://images.unsplash.com/photo-1582944682271-172a57ce4b52?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Dainis Graveris", "author_url": "https://unsplash.com/@dainisgraveris"}, {"url": "https://images.unsplash.com/photo-1592399668789-6432393d5761?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "We-Vibe WOW Tech", "author_url": "https://unsplash.com/@wevibe"}, {"url": "https://images.unsplash.com/photo-1542128850-81a13c7d6e5d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Jan Zhukov", "author_url": "https://unsplash.com/@privetjan"}, {"url": "https://images.unsplash.com/photo-1591901280284-1ff378ecf9bf?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "G\u00fcnter Valda", "author_url": "https://unsplash.com/@valda_photography"}, {"url": "https://images.unsplash.com/photo-1592390140873-d8a460839058?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "SHAYAN rti", "author_url": "https://unsplash.com/@shayan_rostami"}, {"url": "https://images.unsplash.com/photo-1593309402979-84391e2445da?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Dainis Graveris", "author_url": "https://unsplash.com/@dainisgraveris"}, {"url": "https://images.unsplash.com/photo-1582937587725-63696fd4b990?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Dainis Graveris", "author_url": "https://unsplash.com/@dainisgraveris"}, {"url": "https://images.unsplash.com/photo-1509854120-eeab44807cd0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Mickael Gresset", "author_url": "https://unsplash.com/@mickael"}, {"url": "https://images.unsplash.com/photo-1507807111463-cf1449726621?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "x )", "author_url": "https://unsplash.com/@speckfechta"}, {"url": "https://images.unsplash.com/photo-1576769781887-e4686a02d1db?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Birmingham Museums Trust", "author_url": "https://unsplash.com/@birminghammuseumstrust"}, {"url": "https://images.unsplash.com/photo-1533902930455-0b07767e52b6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Stavrialena Gontzou", "author_url": "https://unsplash.com/@stavrialena"}, {"url": "https://images.unsplash.com/photo-1503164781627-cf13763718a7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Charlotte Butcher", "author_url": "https://unsplash.com/@charbutch"}, {"url": "https://images.unsplash.com/photo-1531646317777-0619c7c5d1d3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Gabrielle Henderson", "author_url": "https://unsplash.com/@gabriellefaithhenderson"}, {"url": "https://images.unsplash.com/photo-1575228937854-224dbf41c30d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Bianca Berg", "author_url": "https://unsplash.com/@biancaberg"}, {"url": "https://images.unsplash.com/photo-1569198029748-cd12fd4ae3c5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Ava Sol", "author_url": "https://unsplash.com/@avasol"}, {"url": "https://images.unsplash.com/photo-1583141244890-128f80c6d0ff?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Dainis Graveris", "author_url": "https://unsplash.com/@dainisgraveris"}, {"url": "https://images.unsplash.com/photo-1585963373105-404b0a93c946?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Diego Lozano", "author_url": "https://unsplash.com/@diegonacho"}, {"url": "https://images.unsplash.com/photo-1587666312889-17b0444cc0e5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Ferdinand studio", "author_url": "https://unsplash.com/@ferdinandstudio"}, {"url": "https://images.unsplash.com/photo-1564505971742-18360fa287eb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Marco Mons", "author_url": "https://unsplash.com/@markomons"}, {"url": "https://images.unsplash.com/photo-1562494566-35b48599c943?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Heike Mintel", "author_url": "https://unsplash.com/@erstbelichtung"}, {"url": "https://images.unsplash.com/photo-1548192227-397f63eb63ff?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Karim MANJRA", "author_url": "https://unsplash.com/@karim_manjra"}, {"url": "https://images.unsplash.com/photo-1523649732454-13c21c007f1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Caroline Hernandez", "author_url": "https://unsplash.com/@carolinehdz"}, {"url": "https://images.unsplash.com/photo-1599399923028-329c63963bca?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Masha Nova", "author_url": "https://unsplash.com/@mashanova"}, {"url": "https://images.unsplash.com/photo-1599843671035-f2c6439724f8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Pars Sahin", "author_url": "https://unsplash.com/@byadoniaa"}, {"url": "https://images.unsplash.com/photo-1599843671251-9dc28ea7c658?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Pars Sahin", "author_url": "https://unsplash.com/@byadoniaa"}, {"url": "https://images.unsplash.com/photo-1599837296899-5510490df5fa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Pars Sahin", "author_url": "https://unsplash.com/@byadoniaa"}];
var i = getRandomInt(images.length);
changeImage();
setInterval(changeImage, 15000);
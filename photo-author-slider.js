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
var images = [{"url": "https://images.unsplash.com/photo-1601758124096-1fd661873b95?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Chewy", "author_url": "https://unsplash.com/@chewy"}, {"url": "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Alvan Nee", "author_url": "https://unsplash.com/@alvannee"}, {"url": "https://images.unsplash.com/photo-1570021974424-60e83dfee639?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Julian Schiemann", "author_url": "https://unsplash.com/@bonvoyagepictures"}, {"url": "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "James Barker", "author_url": "https://unsplash.com/@barkernotbaker"}, {"url": "https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Anoir Chafik", "author_url": "https://unsplash.com/@anoirchafik"}, {"url": "https://images.unsplash.com/photo-1551717743-49959800b1f6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "gotdaflow", "author_url": "https://unsplash.com/@gettagottaflow"}, {"url": "https://images.unsplash.com/photo-1494947665470-20322015e3a8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Matt Nelson", "author_url": "https://unsplash.com/@mnelson"}, {"url": "https://images.unsplash.com/photo-1558929996-da64ba858215?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Camilo Fierro", "author_url": "https://unsplash.com/@camilofierro14"}, {"url": "https://images.unsplash.com/photo-1601758260679-259d3f79c9a1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Chewy", "author_url": "https://unsplash.com/@chewy"}, {"url": "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Berkay Gumustekin", "author_url": "https://unsplash.com/@berkaygumustekin"}, {"url": "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Jf Brou", "author_url": "https://unsplash.com/@jfbrou"}, {"url": "https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Eric Ward", "author_url": "https://unsplash.com/@ericjamesward"}, {"url": "https://images.unsplash.com/photo-1536809188428-e8ecf663d0be?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Michael Oxendine", "author_url": "https://unsplash.com/@oxendine_"}, {"url": "https://images.unsplash.com/photo-1546975490-e8b92a360b24?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Cole Keister", "author_url": "https://unsplash.com/@coleito"}, {"url": "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Vincent van Zalinge", "author_url": "https://unsplash.com/@vincentvanzalinge"}, {"url": "https://images.unsplash.com/photo-1519150268069-c094cfc0b3c8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Judi Neumeyer", "author_url": "https://unsplash.com/@jneumeyer"}, {"url": "https://images.unsplash.com/photo-1601758260944-72f34e1b8d57?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Chewy", "author_url": "https://unsplash.com/@chewy"}, {"url": "https://images.unsplash.com/photo-1543554618-7e19c5e393d9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Mark Zamora", "author_url": "https://unsplash.com/@mmm_mark"}, {"url": "https://images.unsplash.com/photo-1555897209-208b67f652c5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "KaLisa Veer", "author_url": "https://unsplash.com/@kalisaveer"}, {"url": "https://images.unsplash.com/photo-1518815068914-038920b6f0c6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Jamie Street", "author_url": "https://unsplash.com/@jamie452"}, {"url": "https://images.unsplash.com/photo-1549291981-56d443d5e2a2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Lucrezia Carnelos", "author_url": "https://unsplash.com/@ciabattespugnose"}, {"url": "https://images.unsplash.com/photo-1489417139533-915815598d31?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Rebekah Howell", "author_url": "https://unsplash.com/@rebekahhowell00"}, {"url": "https://images.unsplash.com/photo-1477973770766-6228305816df?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Christopher Ayme", "author_url": "https://unsplash.com/@mutedtone"}, {"url": "https://images.unsplash.com/photo-1553998495-15606c6cb6f7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Graham Holtshausen", "author_url": "https://unsplash.com/@freedomstudios"}, {"url": "https://images.unsplash.com/photo-1541876176131-3f5e84a7331a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Karl Anderson", "author_url": "https://unsplash.com/@karlkiwi90"}, {"url": "https://images.unsplash.com/photo-1546421845-6471bdcf3edf?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Jenny Marvin", "author_url": "https://unsplash.com/@jennymarvin"}, {"url": "https://images.unsplash.com/photo-1562317305-58a17fe2c09e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Lucrezia Carnelos", "author_url": "https://unsplash.com/@ciabattespugnose"}, {"url": "https://images.unsplash.com/photo-1494913148647-353ae514b35e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Alvan Nee", "author_url": "https://unsplash.com/@alvannee"}, {"url": "https://images.unsplash.com/photo-1554226983-8a81adeda0c1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "2 Bro\u2019s Media", "author_url": "https://unsplash.com/@dandrew"}, {"url": "https://images.unsplash.com/photo-1499938971550-7ad287075e0d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mjk1NH0", "name": "Sneaky Elbow", "author_url": "https://unsplash.com/@sneakyelbow"}];
var i = getRandomInt(images.length);
changeImage();
setInterval(changeImage, 15000);
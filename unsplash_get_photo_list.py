#!/home/lucianb/env/bin/python
import requests as req
import warnings
import json

warnings.filterwarnings("ignore")

url = "https://api.unsplash.com/search/photos"
token = "t5GZOpzhUDfF9Br8aNl1AgSSRxvnI3pIQe3RKpgI6Zw"

javascript1 = """
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
var images ="""

javascript2 = """var i = getRandomInt(images.length);
changeImage();
setInterval(changeImage, 15000);"""

photo_list = []

headers = {
    'Accept': 'application/json',
    'X-HTTP-Method-Override': 'GET'
}

params = {
    'client_id': f'{token}',
    'order_by': 'popular',
    'per_page': 40,
    'query': 'hot',
    'page': 1,
    'orientation':'landscape'
}
try:
    r = req.get(url, headers=headers, params=params, verify=False)
    status_code = r.status_code
except Exception as exc:
    pass

if status_code == 200:
    photos = json.loads(r.text)
    for photo in photos['results']:
        photo_list.append({'url':photo["urls"]["regular"],'name':photo["user"]["name"],'author_url'})

    f = open("photo-author-slider.js", "w")
    f.write(javascript1 +f"{json.dumps(photo_list)};"+ javascript2)
    f.close()
else:
    print(f"Non-200 status code:{status_code}. Error: {r.content}. Exception: {exc}")
    exit(2)
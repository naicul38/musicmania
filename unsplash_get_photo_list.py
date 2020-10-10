#!/usr/bin/python3.8
import requests as req
import warnings
import json

warnings.filterwarnings("ignore")

url = "https://api.unsplash.com/search/photos"
token = "t5GZOpzhUDfF9Br8aNl1AgSSRxvnI3pIQe3RKpgI6Zw"

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
    'page': 1
}
try:
    r = req.get(url, headers=headers, params=params, verify=False)
    status_code = r.status_code
except Exception as exc:
    pass

if status_code == 200:
    photos = json.loads(r.text)
    for photo in photos['results']:
        photo_list.append({photo["urls"]["regular"]:photo["user"]["name"]})

    f = open("./photo_list.json", "w")
    f.write(f"{json.dumps(photo_list)}")
    f.close()
else:
    print(f"Non-200 status code:{status_code}. Error: {r.content}. Exception: {exc}")
    exit(2)
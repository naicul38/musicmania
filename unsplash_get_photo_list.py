#!/usr/bin/python3.7
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
    'per_page': 30,
    'query': 'hot',
    'page': 1
}
try:
    response = req.get(url, headers=headers, params=params, verify=False)
except Exception:
    pass


photos = json.loads(response.text)
for photo in photos['results']:
    photo_list.append({photo['urls']['regular']:photo['user']['username']})

f = open("./photo_list.txt", "w")
f.write(f"{photo_list}")
f.close()

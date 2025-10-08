#!/usr/bin/env python3

# Script to download Mahjong tile images (number suits only) from a specified URL pattern.

# How to run:
# python3 download_images.py

# Credit: https://github.com/black-desk/mahjim

import requests

nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
suits = ['m', 'p', 's']

for num in nums:
    for suit in suits:
        image_url = f'https://mahjim.black-desk.cn/{num}{suit}?country=cn'
        filename = f'{num}{suit}.png'
        response = requests.get(image_url)
        if response.status_code == 200:
            with open(filename, 'wb') as f:
                f.write(response.content)
            print(f"Image '{filename}' downloaded successfully.")
        else:
            print(f"Failed to download image. Status code: {response.status_code}.")

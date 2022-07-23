import requests
import os

directory = "/Users/yicai/Personal/tracycy.com/src/tools/frames50-99"

# iterate over files in that directory
for filename in os.scandir(directory):
    if filename.is_file():
        response = requests.post(
            "https://api.remove.bg/v1.0/removebg",
            files={"image_file": open(filename.path, "rb")},
            data={"size": "auto"},
            headers={"X-Api-Key": "vBGSzTE937TFrjyU4hSjKcUR"},
        )
        if response.status_code == requests.codes.ok:
            with open("./nbg-frames/" + filename.name + "-no-bg.png", "wb") as out:
                out.write(response.content)
        else:
            print("Error:", response.status_code, response.text)

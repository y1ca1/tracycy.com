import requests
import os
import convertapi

directory = "/Users/yicai/Personal/tracycy.com/src/assets/spike-frames"

# iterate over files in that directory
for filename in os.scandir(directory):
    if filename.is_file():
        # print(filename.path)
        convertapi.api_secret = "hoV9q6jmQtaPZEqd"
        convertapi.convert("png", {"File": filename.path}, from_format="gif").file.save(
            "./frames/" + filename.name + "-no-bg.png"
        )

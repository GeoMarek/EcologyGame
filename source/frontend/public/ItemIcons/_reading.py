import json


with open("_manifest.json", encoding="utf-8") as f:
    json_object = json.load(f).items()
    for item in json_object:
        name, data = item
        print(20 * "-")
        print(f"obj_name: {name}")
        for key, value in data.items():
            print(f"{key}: {value}")

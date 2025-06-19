import json

def save_file(path="", date="", content=list):
    with open(path, "w") as file:
        json.dump(
            {
                "date": date,
                "content": content
            }, 
            file, 
            indent=4
        )

def get_file(path=""):
    with open(path, "r") as file:
        return json.load(file)

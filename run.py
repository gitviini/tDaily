from src.view import App, ScrollableFrame, grid
from src.file import save_file, get_file
from datetime import datetime

PATH = "/home/gabriel/Documentos/programing/python/tDaily/tasks.json"
date = str(datetime.now().date())
app = App(name="tDaily")

ScrollableFrame(app, title="Tasks")

data = get_file(PATH)

save_file(PATH, date, data.get("content",[]))

for checkbox in data.get("content",[]):
    app.new_checkbox(
        weight = 0,
        handle = lambda: save_file(PATH, date, app.get_checkbox()),
        frame = grid[0]["content"],
        text = checkbox["name"],
        value = checkbox["value"] if data.get("date") == date else "0",
        callBack = lambda: ()
    )


app.new_button(
    0,
    "nova task", 
    lambda: app.new_checkbox(
        weight = 0, 
        handle = lambda: save_file(PATH, app.get_checkbox()),
        frame = grid[0]["content"],
        value = "0",
        callBack = lambda: save_file(PATH, date, app.get_checkbox()),
    ),
)

app.mainloop()

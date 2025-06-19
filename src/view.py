#custom interface (base tkinter)
import customtkinter
#spec function paramerts types
from typing import Callable

grid = []

class ScrollableFrame(customtkinter.CTkScrollableFrame):
    def __init__(self, frame, title):
        super().__init__(frame, label_text=title)
        self.grid(row=len(grid), column=0, padx=10, pady=10, sticky="ew")
        grid.append({
            "type": "scrollable",
            "content": self
        })

class App(customtkinter.CTk):
    def __init__(self, name):
        super().__init__()
        self.geometry("400x200")
        self.title(name)
        self.grid_columnconfigure(0, weight=1)
        self.grid_rowconfigure(0, weight=1)
        customtkinter.CTkLabel(self, text=name, fg_color="gray30", corner_radius=6)

    def new_button(self, weight=int, text=str, handle=Callable[..., any], frame=""):
        button = customtkinter.CTkButton(
            frame if frame != "" else self, 
            text=text, 
            command=handle
        )
        button.grid(row=len(grid), column=0, padx=10, pady=10, sticky="ew")
        self.grid_columnconfigure(0, weight=1)

        grid.append({
            "type": "button",
            "content": button
        })

    def new_checkbox(self, weight=int, handle=Callable[..., any], frame="", value="0", text="", callBack=Callable[...,any]):
        task = text
        if(not task):
            dialog = customtkinter.CTkInputDialog(text="Digite a sua nova task 🥸", title="Nova task")
            task = dialog.get_input()
            
        if (task == None):
            return
                        
        variable = customtkinter.StringVar(value=value)
        checkbox = customtkinter.CTkCheckBox(
            frame if frame != "" else self,
            text=task,
            command=handle,
            variable=variable,
            onvalue="1",
            offvalue="0"
        )
        checkbox.grid(row=len(grid), column=0, padx=10, pady=[0,10], sticky="ew")

        grid.append({
            "type": "checkbox",
            "content": checkbox
        })

        callBack()

    def get_checkbox(self):
        checkboxes = [{"name":i["content"].cget("text"), "value":i["content"].get()} for i in grid if i["type"] == "checkbox"]
        return checkboxes

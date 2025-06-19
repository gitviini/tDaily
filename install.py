import PyInstaller.__main__

PyInstaller.__main__.run([
    "--noconfirm",
    "--onedir", 
    "--windowed",
    "--add-data=/home/gabriel/.local/lib/python3.13/site-packages/customtkinter:customtkinter/",
    "/home/gabriel/Documentos/programing/python/tDaily/run.py",
])
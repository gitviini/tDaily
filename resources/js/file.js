const PATH = "/tasks.json"

const date = new Date()

async function write(content){
    const data = {
        date: `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`,
        content: content
    }
    await Neutralino.filesystem.writeFile(NL_PATH + PATH, JSON.stringify(data))
}

async function read(){
    let data = {
        date: `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`,
        content: []
    }
    try{
        data = JSON.parse(await Neutralino.filesystem.readFile(NL_PATH + PATH))
    }
    catch(err){}

    if(`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}` != data.date){
        data.content.forEach(task=>task.checked = false)
    }
    return data
}
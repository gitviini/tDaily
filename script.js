const image_path = "/src/static/img/"
let colorScheme = true
const colorSchemeInstance = window.matchMedia('(prefers-color-scheme: dark)')
theme(colorSchemeInstance.matches)
// First set colorscheme and detect change of system
colorSchemeInstance.onchange = (event) => {
    theme(event.matches)
}

onscroll = (e) => {
    const header_heigth = document.querySelector("header").offsetHeight
    const navs = document.querySelectorAll("nav a")
    const articles = document.querySelectorAll("article")
    const body = document.querySelector("body")

    if (window.scrollY >= articles[0].offsetTop - 100) {

        for (let i = 0; i < articles.length; i++) {
            if (window.scrollY >= articles[i].offsetTop - 100 && window.scrollY <= articles[i].offsetTop + articles[i].offsetHeight - 100) {
                navs[i].classList.add("active")
            }
            else {
                navs[i].classList.remove("active")
            }
        }
    }

    if (window.scrollY >= header_heigth) {
        body.classList.add("fixed")
    }
    else {
        body.classList.remove("fixed")
    }
}

function theme(theme = null) {
    if (theme == true) {
        colorScheme = true
        document.querySelector("body").classList.remove("light")
    }
    else if (theme == false) {
        colorScheme = false
        document.querySelector("body").classList.add("light")
    }
    setImage()
}

function setImage() {
    const images = document.querySelectorAll(".img")

    images.forEach(image => {
        let src = image.getAttribute("src")
        if (src.includes("light")) {
            src = src.replace("light", "dark")
        }
        else {
            src = src.replace("dark", "light")
        }
        image.setAttribute("src", src)
    }
    )
}
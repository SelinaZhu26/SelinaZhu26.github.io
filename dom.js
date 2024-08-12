let buttonColor = document.querySelector("#button-mode")

function turnDark () {
    document.querySelector("body").style = "color: white; background-color: black;"
    document.querySelector("#button-mode").innerText = "Light Mode"
}

function turnLight () {
    document.querySelector("body").style = "color: black; background-color: white;"
    document.querySelector("#button-mode").innerText = "Dark Mode"
}

let userStatus = "light"

buttonColor.addEventListener("click", () => {
    if (userStatus == "light") {
        turnDark ()
        userStatus = "dark"
    }

    else {
        turnLight ()
        userStatus = "light"
    }

})


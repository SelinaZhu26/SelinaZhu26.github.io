let colorButton = document.querySelector("#dark-mode")

// declare event handler function

function darkColor() {
// select body element and change background color
    document.body.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
}

colorButton.addEventListener("click", darkColor)

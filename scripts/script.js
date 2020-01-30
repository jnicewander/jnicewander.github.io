function navFunction() {
    let x = document.getElementById("topNav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}

function closeMenu() {
    let y = document.getElementById("topNav");
    y.classList.remove("responsive");
}

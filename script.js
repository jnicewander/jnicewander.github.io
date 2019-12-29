function navFunction() {
    //add smooth scrolling class to html on base.scss
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

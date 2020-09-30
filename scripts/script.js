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


document.addEventListener("DOMContentLoaded", function () {
    pageLoad();
});

const nouns = ['animal', 'witch', 'sailor', 'ninja', 'front-end developer'];
const insert = document.getElementById('insert');
const display = noun => insert.innerText = noun + '.';

function pageLoad() {
    let delay = 300;
    nouns.forEach((noun, i) => {
        setTimeout(() => {
            display(noun);
        }, i * delay);
    });
}
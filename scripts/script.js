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
    pageLoad(nouns);
});

const nouns = ['nerd', 'father', 'longboarder', 'brother', 'Lions fan', 'skateboarder', 'son', 'GC alumni', 'friend', 'front-end developer'];
const insert = document.getElementById('insert');
const name = document.getElementById('name');

const display = noun => insert.innerText = noun + '.';



function pageLoad(wordList) {
    let delay = 300;
    wordList.forEach((noun, i) => {
        setTimeout(() => {
            display(noun);
        }, i * delay);
    });
}
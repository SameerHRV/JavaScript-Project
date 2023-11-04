let timer = 120;
let score = 0;
let hitrn = 0



function increaseScore() {
    score += 10;
    document.querySelector('#scoreval').innerHTML = score;
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10)
    document.querySelector("#hitval").innerHTML = hitrn
}

function runTimer() {
    let timerint = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").innerHTML = timer;
        } else {
            clearInterval(timerint)
            document.querySelector(".pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);
}

function makeBubble() {
    let clutter = ""

    for (let i = 1; i <= 140; i++) {
        let rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`
    }

    document.querySelector(".pbtm").innerHTML = clutter;
}

document.querySelector(".pbtm")
    .addEventListener("click", function (dets) {
        var clickednum = Number(dets.target.textContent);
        if (clickednum === hitrn) {
            increaseScore();
            makeBubble();
            getNewHit();
        }
    })

getNewHit();
runTimer();
makeBubble();
let bulb = document.querySelector(".bulb");
let btn = document.querySelector("button");

let bulbVal = 0;

btn.addEventListener("click", function () {
    if (bulbVal === 0) {
        bulb.style.backgroundColor = "yellow"
        btn.innerHTML = "ON";
        bulbVal = 1;
    } else {
        bulb.style.backgroundColor = "transparent"
        btn.innerHTML = "OFF";
        bulbVal = 0;
    }
});
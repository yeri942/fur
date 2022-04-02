$(document).ready(() => {
    for (let j = 0; j < 16; j++) {
        for (let i = 0; i < 1200; i++) {
            $("#furArea").append(
                `<div class="aFur${i}" style="transform:translateX(${
                    0.04 * i
                }vh) translateY(${3 * j}vh)"></div>`
            );
        }
    }
});

const circle = document.querySelector(".circle");

document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    circle.style.left = mouseX + "px";
    circle.style.top = mouseY + "px";
});

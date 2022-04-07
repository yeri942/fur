$(document).ready(() => {
    for (let j = 0; j < 16; j++) {
        for (let i = 0; i < 200; i++) {
            $("#furArea").append(
                `<div class="aFur" style="transform:translateX(${
                    0.25 * i
                }vh) translateY(${3 * j}vh)"></div>`
            );
        }
    }
    const circle = $(".circle");
    const aFur = $(".aFur");

    document.addEventListener("mousemove", (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        circle.css("left", mouseX + "px").css("top", mouseY + "px");
        if (
            Math.round(aFur[0].getBoundingClientRect().top) - 50 < mouseY &&
            mouseY < Math.round(aFur[0].getBoundingClientRect().top) + 50
        ) {
            aFur.css("background-color", "red");
        }
    });
});

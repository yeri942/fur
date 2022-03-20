$(document).ready(() => {
    for (let j = 0; j < 5; j++) {
        for (let i = 0; i < 500; i++) {
            $("#furArea").append(
                `<div class="aFur${i}" style="transform:translateX(${
                    0.1 * i
                }vh) translateY(${10 * j}vh)"></div>`
            );
        }
    }
});

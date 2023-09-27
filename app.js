const container = document.querySelector('.container');
const square = document.createElement('div');
square.classList.add('square');

const isSpacePressed = false;

document.body.addEventListener('keydown', (x) => {
    if (x.code === "Space") {
        isSpacePressed = true;
    }
});

document.body.addEventListener('keyup', (x) => {
    console.log(x);
});

for (let i = 0; i < 16 * 16; i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
    square.addEventListener('mouseenter', () => {
        square.classList.add("black");
    });
}
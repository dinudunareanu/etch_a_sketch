const container = document.querySelector('.container');
const square = document.createElement('div');
const genBtn = document.querySelector('#genBtn');

let pressed = false;

container.addEventListener('click', () => {
    pressed = !pressed;
});

genBtn.addEventListener('click', () => {
    //reset board
    document.querySelector('.container').innerHTML = '';
    //generate board
    
    let numberOfSquares = document.querySelector('#gen').value;
    console.log(numberOfSquares);
    if (numberOfSquares === "0" || numberOfSquares === "" || numberOfSquares > 250) {
        alert("Invalid input!");
    }
    else {
        let squareWidth = 700 / numberOfSquares;
    
        for (let i = 0; i < numberOfSquares * numberOfSquares; i++) {
            let square = document.createElement('div');
            square.style.width = `${squareWidth}px`;
            square.style.height = `${squareWidth}px`;
            container.appendChild(square);
            square.addEventListener('mouseover', () => {
                if (pressed) {
                    square.classList.add("black");
                }
            });
        }

        alert("Board generated!");
    }
});
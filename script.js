// create elements
const btn = document.querySelector('button');
const div = document.createElement('div');

// add atributes and configure square specs
div.setAttribute("id", "container");
document.body.appendChild(div);

function randomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let rgb = `rgb(${r}, ${g}, ${b})`;
    return rgb;
}

function addASquare(size){
    const square = document.createElement('div');
    square.classList.add("square");
    square.style.cssText = `width: ${100 / size}%; height: ${100 / size}%;`;
    div.appendChild(square);

    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = randomColor();
    });
}

let gridSize = 20;
const totalSquares = gridSize ** 2;

 btn.addEventListener('mousedown', () => {
    let newSize = prompt('Enter a number:');
    if(newSize === null || newSize === "" || newSize > 100){
        alert("enter a valid number");
    } else {
        const squareElements = div.querySelectorAll('.square');
        for(let i = 0; i < squareElements.length; i++){
            div.removeChild(squareElements[i]);
        }
        const newTotal = newSize ** 2;
        for(let i = 0; i < newTotal; i++){
        addASquare(newSize);
        }
    }
});
    
for(let i = 0; i < totalSquares; i++){
    addASquare(gridSize);
}
// HTML elements
const board = document.getElementById(`board`);
const scoreBoard = document.getElementById(`scoreBoard`);
const startButton = document.getElementById(`start`);
const gameOverSign = document.getElementById(`gameOverSign`);

// game settings
const boardSize = 10;
const gameSpeed = 100;
// objeto
const squareTypes= {
    emptySquare : 0,
    snakeSquare : 1,
    foodSquare : 2,
};
// mapeamos direcciones
const directions = {
    ArrowUp:-10,
    ArrowDown: 10,
    ArrowRight: 1,
    ArrowLeft: -1,
};
// game variables
let snake;
let score;
let direction;
let boardSquares;
let emptySquares;
let moveInterval;

const createBoard = () => {
    boardSquares.forEach( (row, rowIndex) => {
        row.forEach( (column, columnndex) => {
            const squareValue = `${rowIndex}${columnndex}`;
            const squareElement = document.createElement('div');
            squareElement.setAttribute('class', 'square emptySquare');
            squareElement.setAttribute('id', squareValue);
            board.appendChild(squareElement);
            emptySquares.push(squareValue);
        })
    })
}
 
const setGame = () =>{
    // inicia en el 00 del tablero termina en el 03
    snake = [`00`,`01`,`02`,`03`];
    score = snake.length;
    direction = `ArrowRigth`;
    boardSquares = Array.from(Array(boardSize), () => new Array(boardSize).fill(squareTypes.emptySquare));
    console.log(boardSquares);
    board.innerHTML = '';
    emptySquares = [];
    createBoard();
    
}
const startGame = () =>{
    setGame();
}
startButton.addEventListener(`click`,startGame);
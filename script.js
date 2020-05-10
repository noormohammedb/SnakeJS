const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const can_size = 600;
canvas.height = can_size;
canvas.width = can_size;

const snakeBox = 20;
const totalMove = can_size/snakeBox;

const apple = new Image();
apple.src;

let dead = new Audio();
let eat = new Audio();
let up = new Audio();
let down = new Audio();
let left = new Audio();
let right = new Audio();

// snake 
let snake = [];
snake[0] = {
    x : 10*snakeBox,
    y : 10*snakeBox
};

// food

let food ={};
getFood();
// score 

let score = 0;

// snake direction 

let direction = "";

document.addEventListener("keydown",keyDirection);

function keyDirection()
{
    let key = event.keyCode;
    if(key==37){
        dir = "LEFT";
    }else if(key==38){
        dir="UP";
    }else if(key==39){
        dir="RIGHT";
    }else if(key==40){
        dir="DOWN";
    }

}

function getFood(){
    food = {
        x : Math.floor(Math.random()*(totalMove-2-3)+3)*snakeBox,
        y : Math.floor(Math.random()*(totalMove-2-3)+3)*snakeBox,
    }
}

function render(){
    context.fillStyle="#2d3d7d";
    context.fillRect(0,0,can_size,can_size);

    for(let i = 0; i<snake.length; i++){
        context.fillStyle = i==0?"#fdfdfd":"white";
        context.fillRect(snake[i].x,snake[i].y,snakeBox,snakeBox);

        context.strokeStle="green";
        context.strokeRect(snake[i].x,snake[i].y,snakeBox,snakeBox)
    }

    context.draw
}
render();

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const can_size = 600;
canvas.height = can_size;
canvas.width = can_size;

const snakeBox = 20;
const totalMove = can_size/snakeBox;

const apple = new Image();
apple.src="/assets/images/apple.png";

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
        context.fillStyle = i==0?"gray":"white";
        context.fillRect(snake[i].x,snake[i].y,snakeBox,snakeBox);

    context.strokeStle="yello";
    context.strokeRect(snake[i].x,snake[i].y,snakeBox,snakeBox)
    }

    context.drawImage(apple,food.x,food.y,snakeBox,snakeBox);

    let snakeX = snake[0].x;
    let snakeY = snake[0],y;
    
    if(direction=="LEFT") snakeX-=snakeBox;
    if(direction=="RIGHT") snakeX+=snakeBox;
    if(direction=="UP") snakeY-=snakeBox;
    if(direction=="DOWN") snakeY+=snakeBox;


    // eat food 

    if(snakeX == food.x && snakeY == food.y){
        score++;
        getFood();
    }else{
        snake.pop();
    }

    let newHead = {
        x : snakeX,
        y : snakeY
    };


    snake.unshift(newHead);


}
render();

var gm = setInterval(render,400);

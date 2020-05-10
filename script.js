const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const can_size = 600;
canvas.height = can_size;
canvas.width = can_size;

const snakeBox = 20;
const totalMove = can_size/snakeBox;

const apple = new Image();
apple.src ="2d";

let dead = new Audio();
let eat = new Audio();
let up = new Audio();
let down = new Audio();
let left = new Audio();
let right = new Audio();

// snake 
let snake = [];

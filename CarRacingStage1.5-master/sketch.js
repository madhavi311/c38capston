var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var c1, c2,c3,c4, track, ground;

function preload()
{
  track=loadImage("images/building.png")
c1= loadImage("images/trex_1.png")
c2= loadImage("images/flower2.jpg")
c3= loadImage("images/flower3.jpg")
c4= loadImage("images/elephant.png")
ground=loadImage("images/backscene.png")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end()
  }
}

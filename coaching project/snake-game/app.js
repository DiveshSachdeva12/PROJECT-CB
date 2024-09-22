let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

let cellsize = 50; // Size of each cell
let snakecell = [[0, 0]]; // Starting point of the snake
let boardheight = 600;
let boardwidth = 1000;
let direction = "right"; // Initial direction
let gameover = false;
let foodcell = generatefood(); // Food initial position

let intervalID = setInterval(function () {
  update();
  draw();
}, 100);

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowDown" && direction !== "up") {
    direction = "down";
  } else if (event.key === "ArrowUp" && direction !== "down") {
    direction = "up";
  } else if (event.key === "ArrowLeft" && direction !== "right") {
    direction = "left";
  } else if (event.key === "ArrowRight" && direction !== "left") {
    direction = "right";
  }
});

// Function to draw the snake and food
function draw() {
  if (gameover === true) {
    clearInterval(intervalID);
    alert("Game Over!");
    return;
  }
  
  ctx.clearRect(0, 0, boardwidth, boardheight);

  // Draw the snake
  for (let cell of snakecell) {
    ctx.fillStyle = "red";
    ctx.fillRect(cell[0], cell[1], cellsize, cellsize);
  }

  // Draw the food
  ctx.fillStyle = "green";
  ctx.fillRect(foodcell[0], foodcell[1], cellsize, cellsize);
}

// Function to update the snake's position and check game state
function update() {
  let HeadX = snakecell[snakecell.length - 1][0];
  let HeadY = snakecell[snakecell.length - 1][1];

  let NewHeadX;
  let NewHeadY;

  if (direction === "right") {
    NewHeadX = HeadX + cellsize;
    NewHeadY = HeadY;
    if (NewHeadX >= boardwidth) gameover = true;
  } else if (direction === "left") {
    NewHeadX = HeadX - cellsize;
    NewHeadY = HeadY;
    if (NewHeadX < 0) gameover = true;
  } else if (direction === "up") {
    NewHeadX = HeadX;
    NewHeadY = HeadY - cellsize;
    if (NewHeadY < 0) gameover = true;
  } else if (direction === "down") {
    NewHeadX = HeadX;
    NewHeadY = HeadY + cellsize;
    if (NewHeadY >= boardheight) gameover = true;
  }

  // Check for self-collision
  for (let i = 0; i < snakecell.length; i++) {
    if (snakecell[i][0] === NewHeadX && snakecell[i][1] === NewHeadY) {
      gameover = true;
    }
  }

  snakecell.push([NewHeadX, NewHeadY]);

  // Check if the snake eats the food
  if (NewHeadX === foodcell[0] && NewHeadY === foodcell[1]) {
    foodcell = generatefood();
  } else {
    snakecell.shift(); // Remove the tail if not eating food
  }
}

// Function to generate random food position
function generatefood() {
  return [
    Math.floor(Math.random() * (boardwidth / cellsize)) * cellsize,
    Math.floor(Math.random() * (boardheight / cellsize)) * cellsize,
  ];
}


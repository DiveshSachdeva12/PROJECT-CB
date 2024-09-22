let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

// Correct way to draw a rectangle

// ctx.fillStyle="yellow"
// ctx.fillRect(100, 200, 150, 50); // (x, y, width, height)


// fill text
ctx.font = '35px Arial';

// Draw the text
ctx.fillStyle="red"
ctx.fillText('divesh', 180, 200);  // (text, x, y)

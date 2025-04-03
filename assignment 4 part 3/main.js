// setup canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

// Ball class to create and manage ball objects
class Ball {
  constructor(x, y, velX, velY, color, size) {
    this.x = x;        // Ball's x-coordinate
    this.y = y;        // Ball's y-coordinate
    this.velX = velX;  // Ball's velocity in x-direction
    this.velY = velY;  // Ball's velocity in y-direction
    this.color = color; // Ball's color
    this.size = size;  // Ball's size (radius)
  }

  // Draw the ball on the canvas
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;  // Set the ball color
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);  // Draw the ball
    ctx.fill();  // Fill the ball with color
  }

  // Update ball position and handle wall collisions
  update() {
    // Reverse velocity when ball hits the right or left wall
    if (this.x + this.size >= width) {
      this.velX = -this.velX;
    }

    if (this.x - this.size <= 0) {
      this.velX = -this.velX;
    }

    // Reverse velocity when ball hits the top or bottom wall
    if (this.y + this.size >= height) {
      this.velY = -this.velY;
    }

    if (this.y - this.size <= 0) {
      this.velY = -this.velY;
    }

    // Update the position based on velocity
    this.x += this.velX;
    this.y += this.velY;
  }

  // Detect collisions between balls
  collisionDetect() {
    for (const ball of balls) {
      // Avoid comparing the same ball with itself
      if (!(this === ball)) {
        const dx = this.x - ball.x; // Horizontal distance between balls
        const dy = this.y - ball.y; // Vertical distance between balls
        const distance = Math.sqrt(dx * dx + dy * dy); // Distance between centers of balls

        // If the distance between balls is smaller than the sum of their sizes, a collision occurred
        if (distance < this.size + ball.size) {
          ball.color = this.color = randomRGB(); // Change both balls' colors to a random one
        }
      }
    }
  }
}

// Array to store all the ball objects
const balls = [];

// Create 25 random balls (adjusted from the original 20 balls)
while (balls.length < 25) {
  const size = random(10, 20);  // Random size between 10 and 20
  const ball = new Ball(
    // Ball position, ensuring it’s at least one ball width away from canvas edges
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),  // Random velocity in x-direction
    random(-7, 7),  // Random velocity in y-direction
    randomRGB(),    // Random color for the ball
    size           // The size (radius) of the ball
  );

  balls.push(ball);  // Add the new ball to the balls array
}

// Main loop function to animate the balls
function loop() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)"; // Set a semi-transparent black background to create a trail effect
  ctx.fillRect(0, 0, width, height);  // Draw the background

  // Loop through all balls and update their properties
  for (const ball of balls) {
    ball.draw();        // Draw the ball
    ball.update();      // Update the ball's position
    ball.collisionDetect();  // Check for any collisions
  }

  // Continuously call the loop function to animate the balls
  requestAnimationFrame(loop);
}

// Start the animation loop
loop();
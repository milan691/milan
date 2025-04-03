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
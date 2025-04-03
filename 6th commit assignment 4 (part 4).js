// Ball array and initial setup
const balls = [];
let ballCount = 25;

// Create and add balls to the array
while (balls.length < ballCount) {
  const size = random(10, 20);
  const ball = new Ball(
    random(size, width - size),
    random(size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size
  );

  balls.push(ball);
}

// Create an evil circle object
const evilCircle = new EvilCircle(random(0, width), random(0, height));

// Display the ball count in HTML
const ballCountDisplay = document.getElementById("ballCountDisplay");
ballCountDisplay.textContent = `Ball count: ${ballCount}`;

// Keydown listener for moving the EvilCircle
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "a":
      evilCircle.x -= evilCircle.velX;
      break;
    case "d":
      evilCircle.x += evilCircle.velX;
      break;
    case "w":
      evilCircle.y -= evilCircle.velY;
      break;
    case "s":
      evilCircle.y += evilCircle.velY;
      break;
  }
});

// Loop to update and draw all objects
function loop() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)"; // Background color
  ctx.fillRect(0, 0, width, height);

  // Draw and update all balls
  for (const ball of balls) {
    if (ball.exists) {
      ball.draw();
      ball.update();
      ball.collisionDetect();
    }
  }

  // Draw and update the evil circle
  evilCircle.draw();
  evilCircle.checkBounds();
  evilCircle.collisionDetect();

  // Request the next animation frame
  requestAnimationFrame(loop);
}

// Start the animation loop
loop();

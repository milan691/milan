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

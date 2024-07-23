var asteroidCollision = function (asteroids) {
  let stack = [];

  for (let i = 0; i < asteroids.length; i++) {
    let currentAsteroid = asteroids[i];

    // Handle potential collisions
    while (
      stack.length > 0 &&
      stack[stack.length - 1] > 0 &&
      currentAsteroid < 0
    ) {
      let topAsteroid = stack[stack.length - 1];

      if (topAsteroid < -currentAsteroid) {
        // Top of stack is destroyed
        stack.pop();
        continue; // Continue to check for further collisions
      } else if (topAsteroid === -currentAsteroid) {
        // Both asteroids destroy each other
        stack.pop();
      }
      // Current asteroid is destroyed in both cases
      currentAsteroid = 0;
      break;
    }

    // If current asteroid survives or there was no collision
    if (currentAsteroid !== 0) {
      stack.push(currentAsteroid);
    }
  }

  return stack;
};

let result = asteroidCollision([4, 2, -5]);
console.log(result); // Output: [10]

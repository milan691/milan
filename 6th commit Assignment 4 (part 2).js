/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function() {
  // Check the current class of the button
  if (btn.getAttribute('class') === 'dark') {
    // Change to light mode (lighten the image)
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)'; // Darken the image with semi-transparent black
  } else {
    // Change to dark mode (darken the image)
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)'; // Remove the darkening overlay
  }
});
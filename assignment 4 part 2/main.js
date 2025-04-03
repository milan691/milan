// Get references to the DOM elements
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const altText = {
  'pic1.jpg': 'Closeup of a blue human eye',
  'pic2.jpg': 'A beautiful sunset over the ocean',
  'pic3.jpg': 'A majestic mountain peak',
  'pic4.jpg': 'A city skyline at night',
  'pic5.jpg': 'A forest path in autumn'
};

/* Looping through images */
imageFilenames.forEach(function(filename) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/' + filename);
  newImage.setAttribute('alt', altText[filename]);

  // Append the new image to the thumb-bar
  thumbBar.appendChild(newImage);

  // Add a click event listener to each thumbnail image
  newImage.addEventListener('click', function() {
    // Change the displayed image's src and alt attributes to match the clicked thumbnail
    displayedImage.setAttribute('src', 'images/' + filename);
    displayedImage.setAttribute('alt', altText[filename]);
  });
});

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

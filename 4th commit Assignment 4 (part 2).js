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

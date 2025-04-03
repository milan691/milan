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
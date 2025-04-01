  // If UK radio button is selected, convert temperature and weight
  if (document.getElementById("uk").checked) {
    let weight = Math.round(300 * 0.07).toString() + ' stone';
    let temperature = Math.round((94 - 32) / 1.8).toString() + ' centigrade';
    newStory = newStory.replace('94 fahrenheit', temperature).replace('300 pounds', weight);
  }

  // Display the new story
  story.textContent = newStory;
  story.style.visibility = 'visible';
}

// Add event listener for the randomize button
randomize.addEventListener('click', result);

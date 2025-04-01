// Get references to the DOM elements that we'll interact with
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

// The initial story template with placeholders
let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

// Arrays to hold possible story insertions
let insertX = ['Willy the Goblin', 'Daddy Father', 'Christmas'];
let insertY = ['the White House', 'Disneyland', 'the soup kitchen'];
let insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];


// Function to randomly select an item from an array
function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// Function to generate the random story
function result() {
  let newStory = storyText;
  let xItem1 = randomValueFromArray(insertX); // First random value for :insertx:
  let xItem2 = randomValueFromArray(insertX); // Second random value for :insertx:
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  // Replace the placeholders correctly with different xItems
  newStory = newStory.replace(':insertx:', xItem1)
                     .replace(':insertx:', xItem2) // This replaces the second :insertx:
                     .replace(':inserty:', yItem)
                     .replace(':insertz:', zItem);

  // If custom name is provided, replace "Bob" with the custom name
  if (customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

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

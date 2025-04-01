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
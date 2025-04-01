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
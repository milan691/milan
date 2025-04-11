// Functionality for showing/hiding the comments section
const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

commentWrapper.style.display = 'none';

showHideBtn.addEventListener('click', () => {
  const isHidden = commentWrapper.style.display === 'none';
  commentWrapper.style.display = isHidden ? 'block' : 'none';
  showHideBtn.textContent = isHidden ? 'Hide comments' : 'Show comments';
});

// Functionality for adding a new comment via the comments form
const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nameValue = nameField.value.trim();
  const commentValue = commentField.value.trim();

  if (nameValue && commentValue) {
    const listItem = document.createElement('li');
    const namePara = document.createElement('p');
    const commentPara = document.createElement('p');

    namePara.textContent = nameValue;
    commentPara.textContent = commentValue;

    listItem.appendChild(namePara);
    listItem.appendChild(commentPara);
    list.appendChild(listItem);

    nameField.value = '';
    commentField.value = '';
  }
});

// Audio transcript toggle functionality
const transcript = document.querySelector('.transcript');
const transcriptBtn = document.querySelector('.transcript-button');

if (transcript && transcriptBtn) {
  transcript.style.display = 'none';

  transcriptBtn.addEventListener('click', () => {
    const isHidden = transcript.style.display === 'none';
    transcript.style.display = isHidden ? 'block' : 'none';
    transcriptBtn.textContent = isHidden ? 'Hide transcript' : 'Show transcript';
  });
}

// Hamburger menu functionality
const hamIcon = document.querySelector('.hamIcon');
const navMenu = document.querySelector('nav ul');

if (hamIcon && navMenu) {
  navMenu.classList.add('hidden');

  hamIcon.addEventListener('click', () => {
    const isHidden = navMenu.classList.contains('hidden');
    navMenu.classList.toggle('hidden', !isHidden);
    navMenu.classList.toggle('visible', isHidden);
    navMenu.style.visibility = isHidden ? 'visible' : 'hidden';
  });
}

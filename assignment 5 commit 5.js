
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

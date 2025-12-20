// Connor Fulton

// Dark/Light Mode Code
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

if (toggleButton) {
  body.classList.add('light-mode');

  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    toggleButton.textContent =
      body.classList.contains('dark-mode')
        ? 'Switch to Light Mode'
        : 'Switch to Dark Mode';
  });
}
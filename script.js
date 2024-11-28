const darkModeToggle = document.getElementById('darkModeToggle');

// Check if dark mode is already enabled in local storage
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// Set the initial state of the toggle and body class
if (isDarkMode) {
  darkModeToggle.checked = true;
  document.body.classList.add('dark-mode');
}

darkModeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Ensure the dark mode state is preserved on page refresh
window.onload = function() {
  if (isDarkMode) {
    darkModeToggle.checked = true;
    document.body.classList.add('dark-mode');
  }
};
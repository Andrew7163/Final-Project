// Theme Switching (Light/Dark Mode)
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  // Save user's theme preference in localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    themeToggleBtn.textContent = '🌙';  // Switch to light mode icon
  } else {
    localStorage.removeItem('theme');
    themeToggleBtn.textContent = '🌞';  // Switch to dark mode icon
  }
});

// Load user's theme preference on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggleBtn.textContent = '🌙';  // Switch to light mode icon
  } else {
    themeToggleBtn.textContent = '🌞';  // Switch to dark mode icon
  }
});

// Smooth Scrolling Navigation
const navLinks = document.querySelectorAll('header nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);
    
    window.scrollTo({
      top: targetElement.offsetTop - 80, // Adjusting for header height
      behavior: 'smooth'
    });
  });
});

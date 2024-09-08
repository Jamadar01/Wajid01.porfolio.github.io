// Theme toggle
const themeSwitch = document.getElementById('theme-switch');

// Check for saved theme preference in localStorage
const currentTheme = localStorage.getItem('theme') || 'light-mode';
document.body.classList.add(currentTheme);
themeSwitch.checked = currentTheme === 'dark-mode';

// Add event listener for theme switch
themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        document.body.classList.replace('light-mode', 'dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    } else {
        document.body.classList.replace('dark-mode', 'light-mode');
        localStorage.setItem('theme', 'light-mode');
    }
});

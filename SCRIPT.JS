// Select the toggle button
const themeToggleBtn = document.getElementById('themeToggle');

// Listen for a click on the button
themeToggleBtn.addEventListener('click', () => {
    // Toggle the 'dark-mode' class on the body tag
    document.body.classList.toggle('dark-mode');
    
    // Change the button text based on the mode
    if (document.body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = '☀️ Light Mode';
    } else {
        themeToggleBtn.textContent = '🌙 Dark Mode';
    }
});
let profileBtn = document.getElementById('profileBtn');
profileBtn.addEventListener('click', function() {
    console.log('Profile button clicked');
});
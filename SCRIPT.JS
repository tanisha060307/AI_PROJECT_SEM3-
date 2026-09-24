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
let profileModal = document.getElementById('profileModal');
profileBtn.addEventListener('click', function() {
    profileModal.style.display = 'flex';
});
let closeProfileBtn = document.getElementById('closeProfileBtn');
closeProfileBtn.addEventListener('click', function() {
    profileModal.style.display = 'none';
});
let nameInput = document.getElementById('nameInput');
let emailInput = document.getElementById('emailInput');
let semesterInput = document.getElementById('semesterInput');
let collegeinput =document.getElementById('collegeInput');
// Find the Save Profile button
let saveProfileBtn = document.getElementById('saveProfileBtn');

// When Save Profile is clicked
saveProfileBtn.addEventListener('click', function() {

    // Get whatever the user typed
    console.log(nameInput.value);
    console.log(emailInput.value);
    console.log(semesterInput.value);
    console.log(collegeInput.value);

});
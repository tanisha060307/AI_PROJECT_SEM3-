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
// Create an object to hold the user's profile details
let userProfile = {
    name: "",
    email: "",
    semester: "",
    college: ""
};
// When Save Profile is clicked
saveProfileBtn.addEventListener('click', function() {

    userProfile.name = nameInput.value;
    userProfile.email = emailInput.value;
    userProfile.semester = semesterInput.value;
    userProfile.college = collegeinput.value;
    console.log('Profile saved:', userProfile);
     localStorage.setItem("userProfile", JSON.stringify(userProfile));
    profileBtn.textContent = "👤 " + userProfile.name;
profileModal.style.display = "none";
});
document.addEventListener('keydown', function(event) {

    // Check if the user pressed Enter
    if (event.key === 'Enter') {

        // Save the profile
        saveProfileBtn.click();
    }
});
// Check whether a profile was saved in this browser
let savedProfileText = localStorage.getItem("userProfile");

// If saved data exists, load it
if (savedProfileText) {

    // Convert the saved JSON text back into a JavaScript object
    userProfile = JSON.parse(savedProfileText);

    // Put the saved details back into the input boxes
    nameInput.value = userProfile.name;
    emailInput.value = userProfile.email;
    semesterInput.value = userProfile.semester;
    collegeinput.value = userProfile.college;
}
if (userProfile.name) {
    profileBtn.textContent = "👤 " + userProfile.name;
}
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
// =========================
// EXAM SCHEDULE CALENDAR
// =========================

let examScheduleBtn = document.getElementById("examScheduleBtn");
let examCalendarModal = document.getElementById("examCalendarModal");
let closeCalendarBtn = document.getElementById("closeCalendarBtn");


// Important Odd Semester dates
let examDates = {

    "2026-07-30": "Commencement of Academic Programs",
    "2026-08-05": "Enrollment / Fee Submission",
    "2026-08-14": "Important Academic Date",

    "2026-09-01": "Enrollment / Academic Activity",
    "2026-09-03": "Enrollment / Fee Submission",
    "2026-09-07": "Important Academic Date",
    "2026-09-12": "Important Academic Date",
    "2026-09-22": "Important Academic Date",
    "2026-09-25": "Important Academic Date",
    "2026-09-28": "Important Academic Date",
    "2026-09-30": "Enrollment with Late Fine",

    "2026-10-12": "Important Academic Date",
    "2026-10-14": "Back Paper Enrollment / Examination Fee",

    "2026-11-02": "Important Academic Date",
    "2026-11-07": "Important Academic Date",
    "2026-11-17": "CA / PCA Submission",
    "2026-11-18": "End Semester CA",
    "2026-11-20": "Important Academic Date",
    "2026-11-21": "Important Academic Date",
    "2026-11-23": "Whole Semester CA / Attendance",

    "2026-12-02": "Attendance / Examination Eligibility",
    "2026-12-04": "Pre-Examination Activities",
    "2026-12-19": "Pre-Examination Activities",
    "2026-12-21": "Theory Examination Period",
    "2026-12-24": "Theory Examination Period"
};


// Open calendar
examScheduleBtn.addEventListener("click", function() {

    examCalendarModal.style.display = "flex";

});


// Close calendar
closeCalendarBtn.addEventListener("click", function() {

    examCalendarModal.style.display = "none";

});
// Calendar elements
let calendarDays = document.getElementById("calendarDays");
let calendarMonth = document.getElementById("calendarMonth");
let calendarEventDetails = document.getElementById("calendarEventDetails");


// Current calendar month
let currentMonth = 8; // September (0 = January)
let currentYear = 2026;


// Generate calendar
function generateCalendar(month, year) {

    // Clear old dates
    calendarDays.innerHTML = "";

    // Get first day of the month
    let firstDay = new Date(year, month, 1).getDay();

    // Get number of days in the month
    let totalDays = new Date(year, month + 1, 0).getDate();

    // Show month and year
    let monthName = new Date(year, month).toLocaleString("default", {
        month: "long"
    });

    calendarMonth.textContent = monthName + " " + year;


    // Empty spaces before the first day
    for (let i = 0; i < firstDay; i++) {

        let emptyDay = document.createElement("span");

        calendarDays.appendChild(emptyDay);

    }


    // Create each date
    for (let day = 1; day <= totalDays; day++) {

        let dateCell = document.createElement("span");

        dateCell.textContent = day;


        // Create date in YYYY-MM-DD format
        let monthNumber = String(month + 1).padStart(2, "0");
        let dayNumber = String(day).padStart(2, "0");

        let dateKey = `${year}-${monthNumber}-${dayNumber}`;


        // Check whether this date is important
        if (examDates[dateKey]) {

            dateCell.classList.add("important-date");

            dateCell.textContent = "🔵 " + day;


            // Show event when date is clicked
            dateCell.addEventListener("click", function() {

                calendarEventDetails.textContent =
                    dateKey + " — " + examDates[dateKey];

            });

        }


        calendarDays.appendChild(dateCell);

    }

}
let prevMonthBtn = document.getElementById("prevMonthBtn");
let nextMonthBtn = document.getElementById("nextMonthBtn");

nextMonthBtn.addEventListener("click", function() {

    currentMonth++;

    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }

    generateCalendar(currentMonth, currentYear);
});

prevMonthBtn.addEventListener("click", function() {

    currentMonth--;

    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }

    generateCalendar(currentMonth, currentYear);
});
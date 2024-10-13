const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', function () {
    menuToggle.classList.toggle('open');
    nav.classList.toggle('show');
});


// Timestamp value
window.onload = function () {
    document.getElementById("timestamp").value = new Date().toLocaleString();
};

// Open Modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// Close Modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Close modal when clicking outside
window.onclick = function (event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}

// Thank you page

// Function to get query parameters from the URL
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        firstName: params.get('firstName'),
        lastName: params.get('lastName'),
        email: params.get('email'),
        mobile: params.get('mobile'),
        organization: params.get('organization'),
        timestamp: params.get('timestamp'),
    };
}

// Function to display the data in the respective span elements
function displayFormData() {
    const formData = getQueryParams();

    document.getElementById('firstName').textContent = formData.firstName || 'N/A';
    document.getElementById('lastName').textContent = formData.lastName || 'N/A';
    document.getElementById('email').textContent = formData.email || 'N/A';
    document.getElementById('mobile').textContent = formData.mobile || 'N/A';
    document.getElementById('organization').textContent = formData.organization || 'N/A';
    document.getElementById('timestamp').textContent = formData.timestamp || 'N/A';
}

// Execute the function after the page loads
window.onload = displayFormData;

// footer date information
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentYearElement = document.getElementById("currentYear");
currentYearElement.textContent = currentYear;

let date = document.lastModified;
document.getElementById("lastModified").innerHTML = "Last modified: " + date;

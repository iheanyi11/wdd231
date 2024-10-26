//hamburger function
const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', function () {
    menuToggle.classList.toggle('open');
    nav.classList.toggle('show');
});

const lastModifiedSpan = document.querySelector("#last-modified");
lastModifiedSpan.textContent = `Last modified: ${document.lastModified}`;

// Modal Dialog for Reservation
const modal = document.getElementById("reservation-modal");
const reservationBtn = document.querySelector(".btn-reservation");
const closeModal = document.querySelector(".close");

// Open the modal when the "Make a Reservation" button is clicked
reservationBtn.addEventListener("click", function () {
    modal.style.display = "block";
});

// Close the modal when the "x" is clicked
closeModal.addEventListener("click", function () {
    modal.style.display = "none";
});

// Close the modal when clicking outside the modal content
window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

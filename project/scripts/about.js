//hamburger function
const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', function () {
    menuToggle.classList.toggle('open');
    nav.classList.toggle('show');
});

const lastModifiedSpan = document.querySelector("#last-modified");
lastModifiedSpan.textContent = `Last modified: ${document.lastModified}`;


// Modal functionality for team members
const teamMembers = document.querySelectorAll('.team-member');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const closeModal = document.querySelector('.close-modal');

// Check that all elements exist before adding event listeners
if (teamMembers && modal && modalContent && closeModal) {
    teamMembers.forEach(member => {
        member.addEventListener('click', () => {
            const name = member.querySelector('h3').innerText;
            const role = member.querySelector('p').innerText;
            const imgSrc = member.querySelector('img').src;

            // Populate the modal with the team member's details
            modalContent.innerHTML = `
                <img src="${imgSrc}" alt="${name}" style="width:150px; border-radius:50%; margin-bottom:20px;" />
                <h3>${name}</h3>
                <p>${role}</p>
            `;
            modal.style.display = 'flex'; // Show modal
        });
    });

    // Close the modal when the 'x' is clicked
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close the modal when clicking outside the modal content
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}
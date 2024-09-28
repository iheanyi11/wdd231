const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', function () {
    menuToggle.classList.toggle('open');
    nav.classList.toggle('show');
});


// footer date information
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentYearElement = document.getElementById("currentYear");
currentYearElement.textContent = currentYear;

let date = document.lastModified;
document.getElementById("lastModified").innerHTML = "Last modified: " + date;

// directory cards
document.addEventListener('DOMContentLoaded', fetchMembers);

async function fetchMembers() {
    try {
        const response = await fetch('data/members.json');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        displayMembers(data.members);
    } catch (error) {
        console.error('Error fetching the member data:', error);
    }
}

function displayMembers(members) {
    const memberContainer = document.getElementById('member-container');
    memberContainer.innerHTML = '';

    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = 'member-card';
        memberCard.innerHTML = `
            <img src="${member.imageFileName}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phoneNumber}</p>
            <a href="${member.websiteUrl}" target="_blank">${member.websiteUrl}</a>
        `;
        memberContainer.appendChild(memberCard);
    });
}

document.getElementById('grid').addEventListener('click', () => toggleView('grid'));
document.getElementById('list').addEventListener('click', () => toggleView('list'));

function toggleView(view) {
    const memberContainer = document.getElementById('member-container');
    if (view === 'grid') {
        memberContainer.classList.remove('list-view');
        memberContainer.classList.add('grid-view');
    } else {
        memberContainer.classList.remove('grid-view');
        memberContainer.classList.add('list-view');
    }
}
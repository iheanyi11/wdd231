//hamburger function
const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', function () {
    menuToggle.classList.toggle('open');
    nav.classList.toggle('show');
});

// weather function
// API Key and URLs
const apiKey = '0a7d947a4641774bc9562c026c366437';
const city = 'Lagos';
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

// Fetch current weather data
async function fetchWeather() {
    try {
        const weatherResponse = await fetch(weatherUrl);
        const weatherData = await weatherResponse.json();

        const currentTemp = weatherData.main.temp;
        const currentCondition = weatherData.weather[0].description;

        // Update the current weather elements
        document.getElementById('current-temp').innerText = `Temperature: ${currentTemp} °C`;
        document.getElementById('current-condition').innerText = `Condition: ${currentCondition}`;

        // Fetch the weather forecast data
        fetchForecast();
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Fetch forecast data
async function fetchForecast() {
    try {
        const forecastResponse = await fetch(forecastUrl);
        const forecastData = await forecastResponse.json();

        const forecastList = document.getElementById('forecast');
        forecastList.innerHTML = ''; // Clear previous data

        // Extract forecast for the next 3 days (every 8th entry represents 24 hours)
        for (let i = 1; i <= 3; i++) { // Start at 1 because [0] is current day
            const dayData = forecastData.list[i * 8]; // Every 8th entry is a new day (3-hour intervals)
            const date = new Date(dayData.dt * 1000).toLocaleDateString();
            const temp = dayData.main.temp;

            const listItem = document.createElement('li');
            listItem.innerText = `${date}: ${temp} °C`;
            forecastList.appendChild(listItem);
        }
    } catch (error) {
        console.error('Error fetching forecast data:', error);
    }
}

// Call the function to display weather data when the page loads
fetchWeather();


// Fetch the members information from the JSON file
async function fetchMembers() {
    try {
        const response = await fetch('data/members.json'); // Path to your JSON file
        const data = await response.json();
        const members = data.members;

        // Filter only members with membershipLevel of 3
        const level3Members = members.filter(member => member.membershipLevel === 3);

        // Display only level 3 members
        displayMembers(level3Members);
    } catch (error) {
        console.error('Error fetching members data:', error);
    }
}

// Function to display the members as business cards
function displayMembers(members) {
    const container = document.getElementById('bussiness-spotlight');

    members.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <div class="image-placeholder"><img src="${member.imageFileName}" alt="${member.name}"></div>
            <h2>${member.name}</h2>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> ${member.phoneNumber}</p>
            <p><strong>URL:</strong> ${member.websiteUrl}</p>
        `;

        container.appendChild(card);
    });
}

// Call the fetchMembers function when the page loads
fetchMembers();

// footer date information
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentYearElement = document.getElementById("currentYear");
currentYearElement.textContent = currentYear;

let date = document.lastModified;
document.getElementById("lastModified").innerHTML = "Last modified: " + date;

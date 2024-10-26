//hamburger function
const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', function () {
    menuToggle.classList.toggle('open');
    nav.classList.toggle('show');
});

const lastModifiedSpan = document.querySelector("#last-modified");
lastModifiedSpan.textContent = `Last modified: ${document.lastModified}`;

// Fetch Weather Data (example using OpenWeatherMap API)
const weatherApiKey = '17eb5c1ffc03bdecf55bb8aea30e524d';
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=Ejigbo&units=metric&appid=${weatherApiKey}`;

async function fetchWeather() {
    try {
        const response = await fetch(weatherUrl);
        const weatherData = await response.json();

        // Extract and display weather data
        const temperature = weatherData.main.temp;
        const description = weatherData.weather[0].description;
        document.querySelector('#weather').innerHTML = `<p>Current Weather: ${temperature}°C, ${description}</p>`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Call the function to fetch weather on page load
fetchWeather();


// Form action details
// Function to parse query parameters
function getQueryParams() {
    const params = {};
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    // Loop through each parameter and store in params object
    for (const [key, value] of urlParams.entries()) {
        params[key] = decodeURIComponent(value.replace(/\+/g, ' '));
    }

    return params;
}

// Get form data from the URL
const formData = getQueryParams();

// Display the form data in the respective HTML elements
document.getElementById('submitted-name').innerText = formData.text || "N/A"; // Assuming 'text' is the name field
document.getElementById('submitted-email').innerText = formData.email || "N/A"; // Assuming 'email' is the email field
document.getElementById('submitted-message').innerText = formData.message || "N/A"; // Assuming 'message' is the message field
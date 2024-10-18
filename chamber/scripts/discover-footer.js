// footer date information
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentYearElement = document.getElementById("currentyear");
currentYearElement.textContent = currentYear;

let date = document.lastModified;
document.getElementById("lastmodified").innerHTML = "Last modified: " + date;
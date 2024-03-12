# Weather-Dashboard-App
# Weather Dashboard

Welcome to the Weather Dashboard project! This web application allows users to check the current weather and a 5-day forecast for a specific city.

## Table of Contents

- [Setup](#setup)
- [Usage](#usage)
- [Obtaining an API Key](#obtaining-an-api-key)
- [Project Structure](#project-structure)

## Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/weather-dashboard.git
   cd weather-dashboard
Install Dependencies:
No additional dependencies are required. The project uses Bootstrap via CDN.

Open the Application:
Open the index.html file in your web browser.

**Usage**
Enter City Name:

Type the name of the city you want to check the weather for in the input field.
Click the Search Button:

Click the "Search" button to fetch the current weather and 5-day forecast for the entered city.
View Weather Information:

Current Weather: The top section of the page displays the current temperature, humidity, wind speed, and an icon representing the weather conditions.
5-Day Forecast: Below the current weather, a card group displays the 5-day forecast, including temperature and weather icons for each day.
**Obtaining an API Key**
To use this Weather Dashboard, you need an API key from OpenWeatherMap.

Sign Up on OpenWeatherMap:

Go to OpenWeatherMap and sign up for a free account.
Generate an API Key:

Once logged in, navigate to the API keys section in your account settings.
Generate a new API key and copy it.
Replace the Placeholder:

Open the app.js file.
Find the line with const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';.
Replace 'YOUR_OPENWEATHERMAP_API_KEY' with your actual API key.
**Project Structure**
index.html: HTML file containing the structure of the dashboard.
app.js: JavaScript file with interactivity and API calls.
README.md: Documentation file.

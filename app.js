// Wait for the HTML document to be fully loaded before executing any  JavaScript code.
document.addEventListener("DOMContentLoaded", function() {

    // Declare a constant variable apiKey and assign it a value(your OpenWeatherMap API key).
    const apiKey = "217863e8b407f5f1c902040fac54fc24";

    // Get a reference to the input field with id 'cityInput'.
    const cityInput =  document.getElementById('cityInput');

    // Get a reference to button with id  'searchBtn'.
    const searchBtn = document.getElementById('searchBtn');

    // Get a reference to the element with id 'currentWeather'.
    const currentWeather = document.getElementById('currentWeather');

    // Get  a reference to the element  with id 'forecast'.
    const forecast = document.getElementById('forecast');

    // Declare a constant variable lastSearchedCityKey and assign it a value 'lastSearchedCity'.
    const lastSearchedCityKey = 'lastSearchedCity';

    //Event listener for the search button, which triggers when the button is clicked.
    searchBtn.addEventListener('click', function () {

        // Retrieve the value of city input field and remove trailing white spaces.
        const city =  cityInput.value.trim();

        // Check if the city input field is not empty.
        if(city !=='') {
           // If not empty, call the fetchWeatherData function with the city as an argument.
           fetchWeatherData(city);
        }
    });

    // Function to fetch  weather data from OpenWeatherMap API.
    async function fetchWeatherData(city) {
        try{
            // Show loading spinner
            currentWeather.innerHTML = '<p>Loading....</p>' ;
           // Fetch current weather date from  OpenWeatherMap API using the provided API key.
           const currentResponse =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metic`);

           // Convert the response to JSON format.
           const currentData = await currentResponse.json();

           // Fetch 5-day forecast data  from OpenWeatherMap API  using the provided API key.
           const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metic`);

           // Convert the  response to JSON format.
           const forecastData = await forecastResponse.json();

           // Update the UI with the current  weather data.
           updateCurrentWeatherUI(currentData);

           // Update the UI with the 5-day  forecast data.
           updateForecastUI(forecastData);

           // Save the last searched city to local storage.
           localStorage.setItem(lastSearchedCityKey, city);
    }catch(error) {
        // Log any errors that occur during the fetch operation.
        console.error('Error fetching  weather data: ', error);
        // Handle errors
        currentWeather.innerHTML= '<p>Error fetching data</p>';
    }
    }

    // Function to update the UI with current weather data.
    function updateCurrentWeatherUI(data) {
        // Set the innerHTML of the 'currentWeather' element to display current weather information.
        currentWeather.innerHTML  = `
        <h5 class = "card-title">Current Weather in ${data.name}, ${data.sys.country}</h5>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Humidity: ${data.main.humidity} % </p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
        <img src =  "https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt = "Weather Icon">
        `;
    }

    // Function to update UI with  5 day forecast data.
    function updateForecastUI (data){
         
    }

    // Load the last searhed city from the local storage when the page is loaded.
    const  lastSearchedCity = localStorage.getItem(lastSearchedCityKey);
    if(lastSearchedCity){
    // If last searched city exists, fetch weather data for it and set the input field value. 
    fetchWeatherData(lastSearchedCity);
    cityInput.value = lastSearchedCity;
    }
});
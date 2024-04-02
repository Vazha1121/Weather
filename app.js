const apiKey = "a0a8ea5c18b4ebd2f90e085e8c42e132";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".form-control");
const searchBtn = document.querySelector(".btn ");
const weatherIcon = document.querySelector(".weather-icons")



async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`)
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp-number").innerHTML = data.main.temp + " C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " KM/h";

    if(data.weather[0].main == 'Clear') {
        weatherIcon.src = "icons/clear-sky.png";

    }
    else if(data.weather[0].main == 'Clouds'){
        weatherIcon.src = "icons/cloudy.png";
    }
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})


/* const tempNumber = document.querySelector('.temp-number')
const getWeather =  async () => {
    const data = await fetch(apiURL).then(_=>_.json());
    console.log(data)
}

getWeather(); */
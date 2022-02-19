const api = {
    key: "b3a382f9560ca7ed7a71028601542842",
    baseurl: "https://api.openweathermap.org/data/2.5/",
  };
  
  const searchBox = document.querySelector(".search-box");
  searchBox.addEventListener("keypress", setQuery);
  
  function setQuery(e) {
    if (e.keyCode == 13) {
      getResults(searchBox.value);
      searchBox.value = "";
    }
  }
  function getResults(query) {
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then((weather) => {
        return weather.json();
      })
      .then(displayResults);
  }
  
  function displayResults(weather) {
    console.log(weather);
    let city = document.querySelector(".location .city");
    city.innerHTML = `${weather.name}, ${weather.sys.country}`;
  
    let now = new Date();
    let data = document.querySelector(".location .date");
    data.innerHTML = dateBuilder(now);
  
    let temp = document.querySelector(".temp");
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
  
    let weatherEl = document.querySelector(".weather");
    weatherEl.innerHTML = weather.weather[0].main;
  
    let hiLow = document.querySelector(".hi-low");
    hiLow.innerHTML = `${Math.round(weather.main.temp_min)}°c / ${Math.round(
      weather.main.temp_max )}°c`;
  }
  
  function dateBuilder(h) {
    let month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "Octomber",
      "November",
      "December",
    ];
  
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  
    let day = days[h.getDay()];
    let data = h.getDate();
    let monthe = month[h.getMonth()];
    let year = h.getFullYear();
  
    return `${day} ${data} ${monthe} ${year}`;
  }

  // git mazgi ):
  
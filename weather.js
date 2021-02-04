document.getElementById("search_button").addEventListener("click", function () {
  const cityInput = document.querySelector("#city_input").value;
  //   console.log(cityInput);
  getWeather(cityInput);
});

function getWeather(cityInput) {
  fetch(
    `https://api.openweathermap.org/data/2.5/find?q=${cityInput}&appid=83ad21e1607986ddf006940cf0cf3f2b`
  )
    .then((response) => response.json())
    .then((data) => {
      setupData(data);
      // console.log(data);
    });

  function setupData(data) {
    document.getElementById(
      "weather_icon"
    ).src = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
    document.getElementById("city_name").innerText = data.list[0].name;
    document.getElementById("temp").innerText = Math.round(
      data.list[0].main.temp - 273
    );
    document.getElementById("weather_info").innerText =
      data.list[0].weather[0].main;
    document.querySelector("#city_input").value = " ";
  }
}

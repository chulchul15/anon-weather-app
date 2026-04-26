const fakeWeather = {
  london: { temp: 18, desc: "Cloudy" },
  tokyo: { temp: 24, desc: "Sunny" },
  paris: { temp: 20, desc: "Rainy" },
  danang: { temp: 31, desc: "Hot & Sunny" }
};

function getWeather() {
  const cityInput = document.getElementById("city").value.toLowerCase();
  const cityName = document.getElementById("cityName");
  const temp = document.getElementById("temp");
  const desc = document.getElementById("desc");

  if (fakeWeather[cityInput]) {
    cityName.innerText = cityInput.toUpperCase();
    temp.innerText = `Temperature: ${fakeWeather[cityInput].temp}°C`;
    desc.innerText = `Condition: ${fakeWeather[cityInput].desc}`;
  } else {
    cityName.innerText = "Not Found";
    temp.innerText = "Temperature: --";
    desc.innerText = "Condition: No data";
  }
}

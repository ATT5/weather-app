"use strict";

import displayWeatherInfo from "./dom-manipulation";
const error = document.querySelector(".error");
const input = document.querySelector("input");

const getWeather = async function (location) {
  try {
    const requestWeather = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=c5203a38c5fb432e8fc185408232004&q=${location}&aqi=no`
    );
    if (!requestWeather.ok) throw new Error("Problem getting location data");

    const dataWeather = await requestWeather.json();
    console.log(dataWeather);

    //info warther Api
    const position =
      dataWeather.location.name + ", " + dataWeather.location.country;
    const day = dataWeather.current.condition.text;
    const currentDegrees = Math.floor(dataWeather.current.temp_c);
    const feelsLike = Math.floor(dataWeather.current.feelslike_c);
    const wind = Math.floor(dataWeather.current.wind_kph);
    const humidity = Math.floor(dataWeather.current.humidity);

    //display weather info
    displayWeatherInfo(
      day,
      position,
      currentDegrees,
      feelsLike,
      wind,
      humidity
    );
    error.style.display = "none";
    input.value = "";
  } catch (err) {
    error.style.display = "block";
    console.log(err);
  }
};
getWeather("chihuahua");

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") getWeather(input.value);
});

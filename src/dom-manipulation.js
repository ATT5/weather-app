"use strict";

const location = document.querySelector("h1");
const typeOfDay = document.querySelector(".clime");
const degrees = document.querySelector(".degrees");
const feelsLike = document.querySelector(".fl");
const wind = document.querySelector(".wn");
const humidity = document.querySelector(".hu");

//get time
const localTime = function () {
  const time = new Date();
  return time.getHours();
};

const displayWeatherInfo = function (
  day,
  position,
  currentDegrees,
  feels,
  currWind,
  currHumidity
) {
  const currTime = localTime();
  if (currTime >= 6 && currTime < 20) {
    document.body.style.backgroundImage = "url('/img/sunny.jpg')";
  } else {
    document.body.style.backgroundImage = "url('/img/stars.jpg')";
  }
  typeOfDay.textContent = day;
  location.textContent = position;
  degrees.textContent = currentDegrees;
  feelsLike.textContent = feels;
  wind.textContent = currWind;
  humidity.textContent = currHumidity;
};

export default displayWeatherInfo;

import { useEffect } from "react";
import axios from "axios";
const API_KEY = "a83ffb3c067c0596b9efc118be645a47";

const Weather = () => {
  useEffect(() => {
    getWeather();
  }, []);

  const getWeather = async () => {
    const data = "Seoul";
    let reqUrl = `http://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${API_KEY}`;

    await axios
      .get(reqUrl)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return <div>weather</div>;
};

export default Weather;

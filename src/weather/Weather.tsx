import { useEffect } from "react";

import axios from "axios";

const Weather = () => {
  useEffect(() => {
    getWeather();
  }, []);

  const getWeather = async () => {
    const data = "Seoul";

    let reqUrl = `http://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${process.env.REACT_APP_API_KEY}`;

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

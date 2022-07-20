import Today from "./Today";
import Search from "./Search";
import Weather from "./weather/Weather";
import "./App.css";

const App = () => {
  return (
    <div id="wrap">
      <div id="center">
        <div id="top">
          <Today />
          <Search />
        </div>
        <div id="bottom">
          <Weather />
        </div>
      </div>
      <div id="right">{/* <WeatherDetails /> */}</div>
    </div>
  );
};

export default App;

import React from "react";
import Today from "./Today";
import "./App.css";

export default function App() {
  return (
    <div id="wrap">
      <div id="center">
        <div id="top">
          <Today />
          {/* <Search /> */}
        </div>
        <div id="bottom">{/* <Weather /> */}</div>
      </div>
      <div id="right">{/* <WeatherDetails /> */}</div>
    </div>
  );
}

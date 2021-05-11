import React from "react";
import Form from "./Form";
import Header from "./Header";

function App() {
  return [
    <Header />,
    <div className="container">
      <Form />

      <div className="forecast">
        <h2>FORECAST</h2>
        <img src="images/few-clouds-day.svg" alt="few-clouds-day-img" />
        <h3>Few clouds</h3>
        <p>temp</p>
      </div>
    </div>,
  ];
}

export default App;

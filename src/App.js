import React, { useState, useEffect } from "react";
import axios from "axios";
import PictureCard from "./Components/APOD_Card";
import "./App.css";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center:
  color: red;
`;

function App() {
  const [dataOfTheDay, SetdataOfTheDay] = useState({});
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((response) => SetdataOfTheDay(response.data));
    // console.log("in our effect");
  }, []);

  useEffect(() => {
    console.log("picture of the day ", dataOfTheDay);
  }, [dataOfTheDay]);

  return (
    <div className="App">
      <p style={style}>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun{" "}
        <span role="img" aria-label="go!">
          🚀
        </span>
        !
      </p>
      <div>
        <PictureCard
          title={dataOfTheDay.title}
          copyright={dataOfTheDay.copyright}
          date={dataOfTheDay.data}
          hdurl={dataOfTheDay.hdurl}
          explanation={dataOfTheDay.explanation}
        />
      </div>
    </div>
  );
}
export default App;

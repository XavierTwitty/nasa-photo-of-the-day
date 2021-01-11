import React, { useState, useEffect } from "react";
import axios from "axios";
import PictureCard from "./Components/APOD_Card";
// import "./App.css";

function App() {
  const [dataOfTheDay, SetdataOfTheDay] = useState({});
  const [error, setError] = useState();

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((response) => SetdataOfTheDay(response.data))
      .catch((err) => setError(err.response.message));
    // console.log("in our effect");
  }, []);

  useEffect(() => {
    console.log("picture of the day ", dataOfTheDay);
  }, [dataOfTheDay]);

  return (
    <div className="App">
      <div>
        <span>
          Read through the instructions in the README.md file to build your NASA
          app! Have fun <span>🚀</span> !
        </span>
      </div>
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

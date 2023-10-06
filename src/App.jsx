import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import axios from "axios";
import Weathercontainer from "./components/WeatherContainer";

function App() {
  const [weather, setWeather] = useState(null);

  const success = (pos) => {  
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const API_KEY = "ed85b58416c66e42134ccf377380d1c2";

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      )
      .then(({ data }) => setWeather(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  return (
    <main className='font-["Lato"] flex justify-center items-center min-h-screen bg-blue-500  text-white ' >
      {weather === null ? (
        <span className="loader"></span>
      ) : (
        <Weathercontainer weather={weather} />
      )}
    </main>
  );
}

export default App;

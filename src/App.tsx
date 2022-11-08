import { useState } from "react";
import axios from "axios";
import LocationInput from "./components/LocationInput/LocationInput";
import "./App.scss";

function App() {
  const [city, setCity] = useState<any>({});
  let todayDate = 0;

  const getWeatherInfo = (data: any) => {
    setCity((old: any) => ({ old, ...data }));
    todayDate = new Date(data.dt).getMonth();
  };

  return (
    <div className="App">
      <LocationInput getWeatherInfo={getWeatherInfo} />
      {city.weather ? (
        <div className="weather__info">
          <h2>{city.name}</h2>
          <div className="icon">
            <img src="../src/assets/react.svg" />
          </div>
          <span className="temperature">{city?.main?.temp}°</span>
          <span className="weather_status">{city.weather[0].description}</span>
          <span className="temp__max-min">
            Max.:{city?.main?.temp_min}° Min.:{city?.main?.temp_max}°
          </span>
        </div>
      ) : null}
    </div>
  );
}

export default App;

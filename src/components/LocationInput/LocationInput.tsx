import { useState } from "react";
import axios from "axios";
import "./LocationInput.scss";

export default function LocationInput({ getWeatherInfo }: any) {
  const [searchText, setSearchText] = useState("");
  const apiKey = "88bda33f4889ae5dab3a5116b34f856c";
  const apiUrl = "https://api.openweathermap.org/data/2.5/";

  const getWeather = () => {
    axios
      .get(
        `${apiUrl}weather?q=${searchText}&units=metric&lang=pt&APPID=${apiKey}`
      )
      .then((res) => {
        getWeatherInfo(res.data);
        setSearchText("");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return (
    <div className="location__input">
      <div className="input__holder">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <button onClick={getWeather}>Search</button>
    </div>
  );
}

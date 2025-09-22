import React, { useState, useEffect } from "react";
import WeatherCard from "./components/WeatherCard";
import Input from "./components/Input";
import Button from "./components/Button";

function App() {
  const [city, setCity] = useState("Manila");
  const [search, setSearch] = useState("Manila");
  const [weather, setWeather] = useState(null);

  const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY;

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }, [city]);

  const handleSearch = () => {
    setCity(search);
  };

  return (
    <div className="min-h-screen flex flex-col items-center pt-10 bg-gradient-to-b from-sky-400 to-blue-600">
      {/* Input + Button */}
      <div className="flex mb-6">
        <Input value={search} onChange={setSearch} />
        <Button onClick={handleSearch}>Search</Button>
      </div>

      {/* Weather Card */}
      <WeatherCard weather={weather} />
    </div>
  );
}

export default App;

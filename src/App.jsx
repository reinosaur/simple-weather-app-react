import { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    if (!city) return;
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_OPENWEATHER_KEY}&units=metric`
      );
      const data = await res.json();
      if (data.cod === 200) {
        setWeather(data);
      } else {
        setWeather(null);
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-b from-blue-200 to-blue-400">
      <h1 className="text-3xl font-bold mb-4">Weather App</h1>

      <div className="w-full max-w-sm">
        <Input
          value={city}
          placeholder="Enter city"
          onChange={(e) => setCity(e.target.value)}
        />
        <Button onClick={fetchWeather}>Get Weather</Button>
        {weather && <WeatherCard weather={weather} />}
      </div>
    </div>
  );
}

export default App;

import React from "react";

const WeatherCard = ({ weather }) => {
  if (!weather) return <p className="text-center mt-10">Loading...</p>;

  const temp = Math.round(weather.main.temp);
  const feelsLike = Math.round(weather.main.feels_like);
  const condition = weather.weather[0].main;
  const description = weather.weather[0].description;
  const icon = weather.weather[0].icon;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 w-80 text-center">
      {/* City + Date */}
      <h2 className="text-lg font-bold">{weather.name}</h2>
      <p className="text-xs text-gray-500 mb-4">
        {new Date().toLocaleDateString("en-US", {
          weekday: "long",
          day: "numeric",
          month: "long",
        })}
      </p>

      {/* Weather Icon */}
      <div className="flex justify-center mb-4">
        <img
          src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
          alt={description}
        />
      </div>

      {/* Temperature + Condition */}
      <h1 className="text-5xl font-bold">{temp}°</h1>
      <p className="text-lg font-semibold">{condition}</p>
      <p className="text-sm text-gray-500 mb-4">{description}</p>

      {/* Extra Info */}
      <div className="grid grid-cols-3 gap-2 text-xs text-gray-600">
        <div>
          <p className="font-semibold">{feelsLike}°</p>
          <span>Feels</span>
        </div>
        <div>
          <p className="font-semibold">{weather.main.humidity}%</p>
          <span>Humidity</span>
        </div>
        <div>
          <p className="font-semibold">{weather.wind.speed} m/s</p>
          <span>Wind</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;

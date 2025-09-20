function WeatherCard({ weather }) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md mt-4 text-center">
      <h2 className="text-xl font-bold">{weather.name}</h2>
      <p className="text-2xl">{weather.main.temp}°C</p>
      <p className="capitalize">{weather.weather[0].description}</p>
    </div>
  );
}

export default WeatherCard;

const API_URL = "http://localhost:3000";

export async function getWeatherStatsOfCurrentCity() {
  let current_city = "hyderabad";
  const response = await fetch(
    `${API_URL}/api/weather/by_city/${current_city}`
  );
  return response.json();
}

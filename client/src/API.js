const API_URL = "http://localhost:3000";

export async function getWeatherStatsOfCurrentCity() {
  let current_city = "hyderabad";
  const response = await fetch(
    `${API_URL}/api/weather/by_city/${current_city}`
  );
  return response.json();
}

export async function getSelectedAreaWeatherData(lat, lon) {
  const response = await fetch(`${API_URL}/api/weather/by_lat_lon/`, {
    method: "GET",
    mode: "cors",
    headers: {
      lat: lat,
      lon: lon,
    },
  });

  return response.json();
}

export async function getWeatherWithinAViewWindow() {
  let lat_top = "20";
  let lat_bot = "16";
  let lon_left = "75";
  let lon_right = "80";
  let zoom = "10";
  const response = await fetch(
    `${API_URL}/api/weather/by_city/by_area/${lon_left}&${lat_bot}&${lon_right}&${lat_top}&${zoom}`
  );
  return response.json();
}

const API_URL = "http://localhost:1337";

export async function listRainfalls() {
  const response = await fetch(`${API_URL}/api/rainfalls`);
  return response.json();
}

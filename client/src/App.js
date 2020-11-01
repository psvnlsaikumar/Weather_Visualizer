import * as React from "react";
import { useState, useEffect } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import {
  getWeatherStatsOfCurrentCity,
  getWeatherWithinAViewWindow,
} from "./API";
const App = () => {
  const [rainFallEntries, setRainFaillEntries] = useState([]);
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 17.2354,
    longitude: 78.3341,
    zoom: 7,
  });

  useEffect(() => {
    (async () => {
      const rainFallEntries = await getWeatherWithinAViewWindow();
      setRainFaillEntries(rainFallEntries);
      console.log(rainFallEntries);
    })();
  }, []);

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    ></ReactMapGL>
  );
};

export default App;

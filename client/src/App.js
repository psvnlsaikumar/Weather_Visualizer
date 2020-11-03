import * as React from "react";
import { useState, useEffect } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import Map from "./Map";
import SearchableMap from "./SearchableMap";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import {
  getWeatherStatsOfCurrentCity,
  getWeatherWithinAViewWindow,
  getSelectedAreaWeatherData,
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
    })();
  }, []);

  const showAreaData = (event) => {
    (async () => {
      const [longitude, latitude] = event.lngLat;
      const getCurrentLocationData = await getSelectedAreaWeatherData(
        longitude,
        latitude
      );
      console.log(getCurrentLocationData);
    })();
  };

  return (
    <div onClick={(viewport) => console.log(viewport)}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Map} />
          <Route exact path="/search" component={SearchableMap} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;

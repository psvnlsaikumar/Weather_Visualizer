import * as React from "react";
import { useState, useEffect } from "react";
import ReactMapGL from "react-map-gl";
import { listRainfalls } from "./API";
const App = () => {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 17.2354,
    longitude: 78.3341,
    zoom: 7,
  });

  useEffect(() => {
    (async () => {
      const rainfaills = await listRainfalls();
      console.log(rainfaills);
    })();
  }, []);

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      />
    </div>
  );
};

export default App;

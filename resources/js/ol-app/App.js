import React from 'react';
import DisplayMapWithRoute from './DisplayMapWithRoute/DisplayMapWithRoute';

import './App.css';
import GPXUploadForm from './GPXUploadForm/GPXUploadForm';


function App() {
  
  const routeURL = '../gpx/Evening_Run.gpx',
        centerCoordinates = [15.192371159791946, 50.75322702527046],
        zoom = 10;

  return (
    
    <GPXUploadForm />
    // // this component display map with gpx layer centered on given coordinates into map-container which span 100% vw and 100% vh
    // <DisplayMapWithRoute zoom={zoom} url={routeURL} centerCoordinates={centerCoordinates}/>

  );
}

export default App;

import React from 'react';
import DisplayMapWithRoute from './DisplayMapWithRoute/DisplayMapWithRoute';

import GPXUploadForm from './GPXUploadForm/GPXUploadForm';


function App() {
  
  return (
    
    <GPXUploadForm />
    
    
    
    // this component display map with gpx layer centered on given coordinates into map-container which span 100% vw and 100% vh
    // <DisplayMapWithRoute zoom={zoom} url={routeURL} centerCoordinates={centerCoordinates}/>

  );
}

export default App;

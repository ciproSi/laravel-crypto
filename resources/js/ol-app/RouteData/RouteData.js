const getCode = async () => {
  
    const response = await fetch ('./gpx/Evening_Run.gpx');

    const parsedCode = await response.text();
    
    console.log(parsedCode);
    
    const gpx = new gpxParser();

    gpx.parse(parsedCode);

    const dist = gpx.tracks[0].distance.total;
    const elev = gpx.tracks[0].elevation.pos;
    
    console.log(dist, elev);
    console.log(gpx);
  
  }
 const data = getCode();
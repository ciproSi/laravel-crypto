import React, { useState, useEffect } from 'react'
import axios from 'axios';

const GPXUploadForm = () => {
    const [routeName, setRouteName] = useState('');
    const [GPXFile, setGPXFile] = useState([]);
    const [GPXUploaded, setGPXUploaded] = useState(false);

    const handleChange = (e) => {
        setRouteName(e.target.value);
    }
    
    const handleFileChange = (e) => {
        setGPXFile(e.target.files[0]);
    }

    

    const handleSubmit = async (e) => {
        
        e.preventDefault();

        let fd = new FormData();
        fd.append("GPXFile", GPXFile, GPXFile.name);
        fd.append('routeName', routeName);
        const response = await axios.post('/new-route', fd);
        console.log(response);
        
        if (response.status === 200) {
            setGPXUploaded(true);
        }

        // TO DO: handle back end errors
        
    }

    if (GPXUploaded === false) {
        
        // show only input for gpx upload and route name
        return (

            <div className="new-route-form" >
                <form action="/new-route" onSubmit={ handleSubmit }>
                    <div className="form-group">
                        <label htmlFor="routeName">Route name:</label>
                        <input type="text" name="routeName" onChange={ handleChange } value={ routeName } />
                    </div>
    
                    <div className="form-group">
                        <label htmlFor="gpxfile">Choose GPX file with route</label>
                        <input type="file" name="gpxfile" onChange={ handleFileChange }/>
                    </div>
                    <button>Next step</button>
                </form>
            </div>
    
        )
    } else {
        
        // GPX already uploaded? = show route info + map + fillable fields for adding more details
        return (
            <div className="new-route-form">
                
                <div className="route__name">{ routeName }</div>
                <div className="route-details-container">
                    <div className="route-detail-container__length"></div>
                    <div className="route-detail-container__elev"></div>
                </div>
            </div>

        )
    }

    
}

export default GPXUploadForm;
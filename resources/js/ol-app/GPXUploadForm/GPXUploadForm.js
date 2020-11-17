import React, { useState } from 'react'
import axios from 'axios';

const GPXUploadForm = () => {
    const [name, setName] = useState('');
    const [GPXFile, setGPXFile] = useState([]);

    const handleChange = (e) => {
        setName(e.target.value);
    }
    
    const handleFileChange = (e) => {
        setGPXFile(e.target.files[0]);
        setName(e.target.files[0].name);
    }

    

    const handleSubmit = async (e) => {
        
        e.preventDefault();

        let fd = new FormData();
        fd.append("GPXFile", GPXFile, name);
        axios.post('/new-route', fd);
        
    }



    return (

        <div className="form" onSubmit={ handleSubmit }>
            <form action="/new-route" onSubmit={ handleSubmit }>
                {/* <div className="form-group">
                    <label htmlFor="name">Route name:</label>
                    <input type="text" name="name" onChange={ handleChange } value={ name } />
                </div> */}

                <div className="form-group">
                    <label htmlFor="gpxfile">Choose GPX file with route</label>
                    <input type="file" name="gpxfile" onChange={ handleFileChange }/>
                </div>
                <button>Submit</button>
            </form>
        </div>

    )
}

export default GPXUploadForm;
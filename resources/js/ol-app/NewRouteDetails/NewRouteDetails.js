import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Checkbox from '../Checkbox/Checkbox'

const NewRouteDetails = (props) => {

    const [activities, setActivities] = useState([]);

    // get all available activities (routes are suitable for different activities) from API
    const fetchActivities = async () => {
        const response = await axios.get('/api/activities');
        
        // add property checked:false to array of activities objects
        response.data.activities.forEach(activity => {
            activity.checked = false;
        });
        
        setActivities(response.data.activities);
    }

    // fetch activities only once
    useEffect(() => {
        fetchActivities();
    }, []);

    const handleCheckBoxChange = (e) => {
        
        const checkBoxIndex = activities.findIndex((elm => elm.name == e.target.name));
        
        activities[checkBoxIndex].checked = !activities[checkBoxIndex].checked;

        setActivities([...activities]);
    }

    return (
        <div className="form">
            <form action="">
                <div className="form-group">
                    <label htmlFor="difficulty">Difficulty (1-5)</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea name="textarea" rows="8" cols="60"/>
                </div>
                <h3>Suitable for</h3>
                {/* adds one checkbox for every activity */}
                <Checkbox checkboxes={ activities} handleChange={ handleCheckBoxChange }/>
            </form>
        </div>
    )
}

export default NewRouteDetails;
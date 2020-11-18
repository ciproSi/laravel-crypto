import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Checkbox from '../Checkbox/Checkbox'

const NewRouteDetails = (props) => {

    const [activities, setActivities] = useState([]);

    const fetchActivities = async () => {
        const response = await axios.get('/api/activities');

    }

    useEffect(() => {
        fetchActivities();
    }, []);


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
                <Checkbox />
            </form>
        </div>
    )
}

export default NewRouteDetails;
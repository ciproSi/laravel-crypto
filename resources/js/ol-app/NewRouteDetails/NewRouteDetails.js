import React from 'react'

const NewRouteDetails = (props) => {

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
            </form>
        </div>
    )
}

export default NewRouteDetails;
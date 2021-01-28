import React from 'react';
import {NavLink } from 'react-router-dom'
//import { deleteAdventure } from '../../Actions/adventuresActions';

const Adventure = ({ name , image_url, deleteAdventure, id }) => {
    return (
        <div>
            <NavLink key={id} to={`/adventures/${id}/events`}>
                {name}
                <img src={image_url} alt="Topics" width={300} height="100%"/>
                </NavLink>
                <button className="delete-button" color='red' size='mini' onClick={() => deleteAdventure(id)}>Delete</button>
        </div>
    )
}

export default Adventure;
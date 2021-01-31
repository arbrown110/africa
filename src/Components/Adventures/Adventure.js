import React from 'react';
import {NavLink } from 'react-router-dom'
//import { deleteAdventure } from '../../Actions/adventuresActions';

const Adventure = (props) => {
	const url = "/adventures/"+props.id+"/events"
    return (
        <div>
            <NavLink to={url}>
                {props.name}
                <img src={props.image_url} alt="Topics" width={300} height="100%"/>
                </NavLink>
                <button className="delete-button" color='red' size='mini' onClick={() => props.deleteAdventure(props.id)}>Delete</button>
        </div>
    )
}

export default Adventure;
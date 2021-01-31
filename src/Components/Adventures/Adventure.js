import React from 'react';
import { NavLink } from 'react-router-dom'
//import { deleteAdventure } from '../../Actions/adventuresActions';

const Adventure = (props) => {
	const url = "/adventures/"+props.id+"/events"
    return (
        <div>
<<<<<<< HEAD
            <NavLink to={url}>
                {props.name}
                <img src={props.image_url} alt="Topics" width={300} height="100%"/>
                </NavLink>
                <button className="delete-button" color='red' size='mini' onClick={() => props.deleteAdventure(props.id)}>Delete</button>
=======
            <br></br>
            <NavLink key={id} to={`/adventures/${id}/events`}>
                {name}
                <br></br>
                <img src={image_url} alt="Topics" width={200} height="100%"/>
                </NavLink>
                <br></br>
                <button className="delete-button"   onClick={() => deleteAdventure(id)}>Delete</button>
>>>>>>> 233b4a82abe60817060ee7254d9b687b3f887b3f
        </div>
    )
}

export default Adventure;
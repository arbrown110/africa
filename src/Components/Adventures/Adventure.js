import React , { useState }from 'react';
import { NavLink } from 'react-router-dom'


const Adventure = (props) => {
    const url = "/adventures/"+props.id+"/events"
    
    const [like, setLike] = useState(false)
    return (
        <div>
            <NavLink to={url}>
                {props.name}
                </NavLink>
                <br>
                </br>
                <button className="like-button" onClick={() => setLike(!like)}>  {like ? "<3" : ""}</button> 
                <br></br>
                <img src={props.image_url} alt="Topics" width={300} height="100%"/>
                <br></br>
                <button className="delete-button" color='red' size='mini' onClick={() => props.deleteAdventure(props.id)}>Delete</button>
                
        </div>
    )
}

export default Adventure;
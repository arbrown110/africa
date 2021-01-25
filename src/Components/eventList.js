import React from 'react';
import { connect } from 'react-redux'

import { deleteEvent } from '../Actions/eventsActions'

const EventsList = (props) => {

    const handleDelete = (event) => {
        props.deleteEvent(event.id, event.adventure.id)
    }
    return (
        
        <div>
            {props.events && props.events.map(event => 
                <div className="events" key={event.id} id={event.id}>
                     <h3 >{event.title}</h3>
                     <li>Description: {event.description}</li>
                     <li>What I did say: {event.krio}</li>
                     
                     <button onClick={()=> handleDelete(event)}>Delete</button>
                </div>
               
            )}
        </div>
    )
}

export default connect(null, {deleteEvent})(EventsList)
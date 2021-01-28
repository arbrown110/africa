import React from 'react';
//import { connect } from 'react-redux'
import Event from './Event'
// import EventContainer from '../Containers/eventContainer'
//import { deleteEvent } from '../../Actions/eventsActions'

const EventsList = (props) => {
    const events = props.eventsList.map(event =>
        <li className="event-breakdown">
            <Event key={event.id} id={event.id}
            title={event.title}
            description={event.description}
            krio={event.krio}
            deleteEvent={props.deleteEvent}/>
        </li>
        )

    // const handleDelete = (event) => {
    //     props.deleteEvent(event.id, event.adventure.id)
    // }
    return (
        <div>
            <h1>{props.adventure.name}</h1>
            <img src={props.adventure.image_url} alt="Topics" width={300} height="100%"/>
            <br>
            </br>
            {events}
        </div>
        // <div>
        //      {/* <EventContainer props={props}/>    */}
        //     {props.events && props.events.map(event => 
        //         <div className="events" key={event.id} id={event.id}>
        //              <h3 >{event.title}</h3>
        //              <li>Description: {event.description}</li>
        //              <li>What I did say: {event.krio}</li>
                     
        //              <button onClick={()=> handleDelete(event)}>Delete</button>
        //         </div>
               
        //     )}
        // </div>
    )
}

//export default connect(null, {deleteEvent})(EventsList)

export default EventsList;
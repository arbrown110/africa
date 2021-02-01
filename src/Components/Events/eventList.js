import React from 'react';
import { connect } from 'react-redux'
import Event from './Event'
import {deleteEvent} from '../../Actions/eventsActions';


const EventsList = (props) => {

        const  events = props.eventsList && props.eventsList.map(event =>
            
            <span className="event-break-down">
               {event.title}
                <Event key={event.id} id={event.id}
                title={event.title}
                description={event.description}
                krio={event.krio}
                adventure_id={props.adventure.id}
                deleteEvent={props.deleteEvent}/>
            </span>
        )

    return (

        <div>
            <br></br>
            <img src={props.adventure.image_url} alt="Topics" width={100} height="100%"/>
            <br>
            </br>
            {events}
        </div>

    )
}

const mapStateToProps = state => {
    return { eventsList: state.eventList.eventListData }
}

const mapDispatchToProps = dispatch => ({
    deleteEvent: (eventId,adventure_id) => dispatch(deleteEvent(eventId, adventure_id))
  
});


export default connect(mapStateToProps, mapDispatchToProps)(EventsList);


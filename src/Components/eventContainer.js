//form needs to mount here

import React, { Component }from 'react';
import { connect } from 'react-redux';
import { fetchEvents } from '../Actions/eventsActions'
import EventsForm from '../Components/EventsForm'
import EventsList from '../Components/eventList';


class EventContainer extends Component {
    componentDidMount() {
        this.props.fetchEvents()
    }

    render() {
        return (
            <div>
                <br></br>
                event Container
                <br />
                <br></br>
                <EventsList  />
                
                 <EventsForm />
            </div>
        )
    }
}

export default connect(null, { fetchEvents })(EventContainer)
// //form needs to mount here

import React, { Component } from 'react';
import {fetchAdventure} from '../Actions/adventuresActions'

import EventsForm from '../Components/Events/EventsForm';

import EventsList from '../Components/Events/eventList';
import {addEvent,  fetchEvents } from '../Actions/eventsActions';

import { connect } from 'react-redux';
//import { fetchAdventure } from '../Actions/adventuresActions'

class EventContainer extends Component {
    componentDidMount(){
        this.props.fetchAdventure(this.props.match.params.adventureId)
        
        this.props.fetchEvents(this.props.match.params.adventureId)


    }
    render() {
        const adventureId = this.props.match.params.adventureId
        debugger
        return (
            <div>

                <EventsList key={adventureId} 
                adventure={this.props.adventureData} 

                eventsList={this.props.eventsList} 
                deleteEvent={this.props.deleteEvent} />

                <EventsForm addEvent={this.props.addEvent} adventureId={adventureId}/>
            </div>
        )
    }
}


const mapStateToProps = state => {
        
    return{
        eventsList: state.eventList.eventListData,
        adventureData: state.adventuresList.adventureData
    }
}


const mapDispatchToProps = dispatch => ({
    fetchAdventure: id => dispatch(fetchAdventure(id)),
    fetchEvents: adventureId => dispatch(fetchEvents(adventureId)),
    addEvent: (EventsForm, adventureId) => dispatch(addEvent(EventsForm, adventureId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EventContainer);





















// import React, { Component }from 'react';
// import { connect } from 'react-redux';
// import { fetchEvents } from '../Actions/eventsActions'
// import EventsForm from '../Components/EventsForm'
// import EventsList from '../Components/eventList';


// class EventContainer extends Component {
//     //  const selectedAdventure = adventures.find(adventure => adventure.id == this.props.match.params.id)

    
//     // const adventureEvents = adventures.filter(adventure => adventure.event_id === props.event_id)
    
    
    
//     //this.props.match.params.id
    
//     render() {
//         // debugger
//         //console.log(adventures)
//         return (
//             <div>
//                 <br></br>
//                 event Container
//                 <br />
//                 <br></br>
//                 <EventsList  />
                
//                  <EventsForm />
//             </div>
//         )
//     }
// }

// const mapStateToProps = (state) => {
//     return {

//         adventures: state.adventures
//     }

    
// }

// export default connect(mapStateToProps, { fetchEvents })(EventContainer)


// //filter adventures to find adventure that matches == adventure ID 
// // put it in variable 
// // then get event from adventure  then pass down in props to eventlist

// import React from 'react'

// const eventContainer = (props) => {
//     console.log(props)
//     return (
//         <div>
//            EventsForm
//         </div>
//     )
// }

// export default eventContainer

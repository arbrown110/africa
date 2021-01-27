// //form needs to mount here

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

import React from 'react'

const eventContainer = (props) => {
    console.log(props)
    return (
        <div>
           EventsForm
        </div>
    )
}

export default eventContainer

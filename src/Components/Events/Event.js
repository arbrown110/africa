import React, { Component } from 'react'
//import { deleteEvent } from '../../Actions/eventsActions'
export default class Event extends Component {
    render() {
        return (
            <div>
               <button name='delete'  onClick={() => this.props.deleteEvent(this.props.id)}> Delete</button> 
            </div>
        )
    }
}

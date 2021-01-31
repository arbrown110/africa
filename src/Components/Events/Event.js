import React, { Component } from 'react'
//import { deleteEvent } from '../../Actions/eventsActions'
export default class Event extends Component {
    render() {
        return (
            <div>
<<<<<<< HEAD
               <button name='delete' color='red' onClick={() => this.props.deleteEvent(this.props.id, this.props.adventure_id)}> Delete</button> 
=======
               <button name='delete'  onClick={() => this.props.deleteEvent(this.props.id)}> Delete</button> 
>>>>>>> 233b4a82abe60817060ee7254d9b687b3f887b3f
            </div>
        )
    }
}

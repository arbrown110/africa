import React, { Component } from 'react'

export default class Event extends Component {
    render() {
        return (
            <div>
               <button name='delete' color='red' onClick={() => this.props.deleteEvent(this.props.id)}> Delete</button> 
            </div>
        )
    }
}

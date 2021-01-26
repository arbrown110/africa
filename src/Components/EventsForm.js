import React, { Component } from 'react'
import { connect } from 'react-redux'

import{ addEvent } from '../Actions/eventsActions'

class EventsForm extends Component {

    state = {
        title: '',
        description: '',
        krio: ''
    }
    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        //debugger
        this.props.addEvent(this.state, this.props.adventure.id)
    }

    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                <h3>So What Happened?:</h3>
                <label>Title:</label>
                <input type='text' value={this.state.title} 
                onChange={this.handleChange} 
                name='title'/>
                <br />

                <label>Description:</label>
                <input type='text' value={this.state.description} 
                onChange={this.handleChange} 
                name='description'/>
                <br />

                <label>What Should I say:</label>
                <input type='text' value={this.state.krio} 
                onChange={this.handleChange} 
                name='krio'/>
                <br />

                <input type='submit' value='Create Event' />
            </form>
        )
    }
}
export default connect(null, { addEvent })(EventsForm);
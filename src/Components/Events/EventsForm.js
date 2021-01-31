import React, { Component } from 'react'
import { connect } from 'react-redux'

import{ addEvent } from '../../Actions/eventsActions'

class EventsForm extends Component {
    constructor() {
      super()
      this.state = {
          title: '',
          description: '',
          krio: ''
      }
    }
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addEvent(this.state, this.props.adventureId);
       this.setState({
            title: '',
            description: '',
            krio: '' 
        })
    }

    render() {
        return (

            <form onSubmit={(e) =>this.handleSubmit(e)}>
                <h3>So What Happened?:</h3>
                <label>Title:</label>
                <input type='text' require value={this.state.title} 
                onChange={(e) =>this.handleChange(e)} 
                name='title'/>
                <br />

                <label>Description:</label>
                <input type='text' require value={this.state.description} 
                onChange={(e) =>this.handleChange(e)} 
                name='description'/>
                <br />

                <label>What Should I say:</label>
                <input type='text' require value={this.state.krio} 
                onChange={(e) =>this.handleChange(e)}
                name='krio'/>
                <br />

                <button size='mini' type='submit'>Create</button> 
            </form>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    addEvent: (data, id) => dispatch(addEvent(data, id)),
})
export default connect(null, mapDispatchToProps)(EventsForm);

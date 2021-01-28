import React, { Component } from 'react'
import { connect } from 'react-redux'
import{ addAdventure } from '../../Actions/adventuresActions'

class AdventuresForm extends Component {
    constructor () {
        super()
        this.state = {
            name: '',
            image_url: ''
        }
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
        this.props.addAdventure(this.state);
        this.setState({
            name: '',
            image_url: '' 
        })
    }

    render() {
        return (

            <form onSubmit={(e) => this.handleSubmit(e)}>
                <h3>Create A New Adventure Topic:</h3>
                <label>Name</label>
                <input type='text' value={this.state.name} 
                onChange={(e) => this.handleChange(e)} 
                name='name'/>
                <br />

                <label>Image:</label>
                <input type='text' value={this.state.image_url} 
                onChange={(e) => this.handleChange(e)} 
                name='image_url'/>
                <br />
                <button type="submit">Create Topic</button>
            </form>
        )
    }
}
export default connect(null, { addAdventure })(AdventuresForm);
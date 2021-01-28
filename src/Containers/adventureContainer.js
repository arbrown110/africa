//form needs to mount here

import React, { Component }from 'react';
import { connect } from 'react-redux';
import {fetchAdventures, deleteAdventure } from '../Actions/adventuresActions'
import AdventuresForm from '../Components/Adventures/AdventuresForm'
import AdventuresList from '../Components/Adventures/adventuresList';


class AdventureContainer extends Component {
    componentDidMount() {
        this.props.fetchAdventures()
    }

    render() {
        return (
            <div>
                
             <AdventuresList adventuresList={this.props.adventuresList} deleteAdventure={this.props.deleteAdventure} />
             <AdventuresForm />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        adventuresList: state.adventuresList.adventuresListData
    }
}

const mapDispatchToProps = dispatch => ({
    fetchAdventures: () => dispatch(fetchAdventures()),
    deleteAdventure: id => dispatch(deleteAdventure(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(AdventureContainer);
//form needs to mount here

import React, { Component }from 'react';
import { connect } from 'react-redux';
import { fetchAdventures } from '../Actions/adventuresActions'
import AdventuresForm from '../Components/AdventuresForm'
import AdventuresList from './adventuresList';


class AdventureContainer extends Component {
    componentDidMount() {
        this.props.fetchAdventures()
    }

    render() {
        return (
            <div>
                
                <AdventuresList />
                <AdventuresForm />
            </div>
        )
    }
}

export default connect(null, {fetchAdventures})(AdventureContainer);
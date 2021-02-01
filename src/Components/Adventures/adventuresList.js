import React from 'react';
import Adventure from './Adventure'
import { connect } from 'react-redux'
import { deleteAdventure } from '../../Actions/adventuresActions'


const AdventuresList = props => {

            return (
                props.adventuresList && props.adventuresList.map(adventure =>

                <Adventure key={adventure.id}  id= {adventure.id} image_url={adventure.image_url} deleteAdventure={props.deleteAdventure}/>)
            )
    }

const mapStateToProps = state => {

    return { adventuresList: state.adventuresList.adventuresListData }
}

const mapDispatchToProps = dispatch => ({
  deleteAdventure: (id) => dispatch(deleteAdventure(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(AdventuresList);


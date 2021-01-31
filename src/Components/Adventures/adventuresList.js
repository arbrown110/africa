import React from 'react';
import Adventure from './Adventure'
import { connect } from 'react-redux'
import { deleteAdventure } from '../../Actions/adventuresActions'
// import { Link } from 'react-router-dom'
//import AdventureContainer from '../Containers/adventureContainer'

const AdventuresList = props => {

    // const adventures = props.adventuresList && props.adventuresList.map(adventure =>
        // <Adventure key={adventure.id} adventure={adventure} {...adventure} deleteAdventure={props.deleteAdventure}/>
        // <Adventure key={adventure.id}  deleteAdventure={props.deleteAdventure}/>
        // )
    // console.log(adventures)
debugger
            return (
                props.adventuresList && props.adventuresList.map(adventure =>
                    <Adventure key={adventure.id}  id= {adventure.id} image_url={adventure.image_url} deleteAdventure={props.deleteAdventure}/>)
                // {adventures}
            )
    }
    //     return (
           
    //         <div>
    //             <h3>Topics:</h3>
    //             {adventures.map(adventures =>
    //             <Link to ={`/adventures/${adventures.id}`} key={adventures.id}>
    //              <div>
    //                 <h3>{adventures.name}</h3>

    //                 <img src={adventures.image_url} alt="Topics" width={300} height="100%"/>
    //              </div>   
    //             </Link>
    //             )}
    //             {/* <AdventureContainer /> */}
    //         </div>
        
    //     )

    // }


//     debugger
//      return (
//         <div>
//             {adventures.map(adventure => <ul><li key={adventure.id}>{adventure.name} <br /> {adventure.image_url} </li></ul>)}
//         </div>
        
//     );
//     debugger
// } 
const mapStateToProps = state => {
//   debugger
    return { adventuresList: state.adventuresList.adventuresListData }
}

const mapDispatchToProps = dispatch => ({
  deleteAdventure: (id) => dispatch(deleteAdventure(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(AdventuresList);

// export default AdventuresList;
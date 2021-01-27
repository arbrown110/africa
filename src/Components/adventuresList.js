import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
//import AdventureContainer from '../Containers/adventureContainer'

const AdventuresList = ({adventures}) => {
    console.log(adventures)
        return (
           
            <div>
                <h3>Topics:</h3>
                {adventures.map(adventures =>
                <Link to ={`/adventures/${adventures.id}`} key={adventures.id}>
                 <div>
                    <h3>{adventures.name}</h3>

                    <img src={adventures.image_url} alt="Topics" width={300} height="100%"/>
                 </div>   
                </Link>
                )}
                {/* <AdventureContainer /> */}
            </div>
        
        )

    }


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
    return { adventures: state.adventures}
}




export default connect(mapStateToProps, {})(AdventuresList);
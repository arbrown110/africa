import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
//import AdventureContainer from './adventureContainer';

const AdventuresList = ({adventures}) => {
        return (
            <div>
                <h3>Topics:</h3>
                {adventures.map(adventures =>
                <Link to ={`/adventures/${adventures.id}`} key={adventures.id}>
                 <div>
                    <button><h3>{adventures.naame}</h3></button>
                    <br>
                    </br>
                    <img src={adventures.image_url} alt="Topics" width={300} height="100%"/>
                 </div>   
                </Link>
                )}
                {/* <AdventureContainer /> */}
            </div>
        
        )

    }



    {/* return (
        <div>
            {adventures.map(adventure => <ul><li key={adventure.id}>{adventure.name} <br /> {adventure.image_url} </li></ul>)}
        </div>
    );
} */}
const mapStateToProps = state => {
    return { adventures: state.adventures}
}




export default connect(mapStateToProps, {})(AdventuresList);
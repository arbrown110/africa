
export const fetchAdventures = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_ADVENTURES'})
        return fetch("/adventures")
        .then(res => res.json())
        .then(adventures => dispatch({ type: 'FETCH_ADVENTURES', payload: adventures}))
    }
}

export const fetchAdventure = id => {
    return (dispatch) => {
        dispatch({type: 'LOADING_ADVENTURES'})
        return fetch(`${"/adventures"}/${id}`)
        .then(res => res.json())
        .then(adventure => dispatch({type: 'FETCH_ADVENTURE', payload: adventure}))
    }
}

export const addAdventure = adventureForm => {
    let data = {
        method: 'POST',
        headers: {'Accept': 'application/json','Content-Type': 'application/json'},
        body: JSON.stringify(adventureForm)
    }
    return dispatch => {
        fetch(`${"/adventures"}`, data)
        .then(res => res.json())
        .then(adventure => dispatch({ type: 'ADD_ADVENTURE', payload: adventure}))
        .catch(err => err)
    }
}


export const deleteAdventure = adventure_id => {
    let data = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' , 'Accept': 'application/json' }
    }
    
    return dispatch => {
<<<<<<< HEAD
        fetch('/adventures/'+adventure_id, data)
=======
        debugger
        fetch(`/adventures/${adventure_id}`, data)
>>>>>>> 233b4a82abe60817060ee7254d9b687b3f887b3f
          .then(response => response.json())
          .then(adventure => dispatch({
            type: 'DELETE_ADVENTURE',
            payload: adventure
<<<<<<< HEAD
          })
        )
=======
          }))
          .catch(err => err)
>>>>>>> 233b4a82abe60817060ee7254d9b687b3f887b3f
      }
    }
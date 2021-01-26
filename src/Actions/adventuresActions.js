
export const fetchAdventures = () => {
    return (dispatch) => {
        fetch("/adventures")
        .then(res => res.json())
        .then(adventures => dispatch({ type: 'FETCH_ADVENTURES', payload: adventures}))
    }
}

export const addAdventure = adventure => {
    return dispatch => {
        fetch("/adventures", {
            method: 'POST',
            body: JSON.stringify(adventure),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
        .then(adventures => dispatch({ type: 'ADD_ADVENTURE', payload: adventures}))
    }
}
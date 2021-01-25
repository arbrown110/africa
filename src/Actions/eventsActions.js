
export const fetchEvents = (event, adventureId) => {
    return (dispatch) => {
        fetch(`/adventures/:${adventureId}/events`)
        .then(res => res.json())
        .then(adventures => dispatch({ type: 'FETCH_EVENTS', payload: adventures}))
    }
}

export const addEvent = (event, adventureId) => {
    return (dispatch) => {
      fetch(`/adventures/${adventureId}/events`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(event)
      })
      .then(res => res.json())
      .then(adventure => {
        dispatch({type: 'ADD_EVENT', payload: adventure})
      })
    };
};

  // deleting events
export const deleteEvent = (eventId, adventureId) => {
    return (dispatch) => {
      fetch(`adventures/${adventureId}/events/${eventId}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(adventure =>
        dispatch({type: 'DELETE_EVENT', payload: adventure})
      )
    };
};
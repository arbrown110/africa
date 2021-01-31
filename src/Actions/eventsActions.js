
export const fetchEvents = adventureId => {
    return dispatch => {
        fetch(`${"/adventures"}/${adventureId}/events`)
        .then(resp => resp.json())
        .then(events =>{ let res = {events, adventureId} 
          dispatch({type: 'FETCH_EVENTS', payload: res})})
    }
}

export const addEvent = (eventsForm, adventureId) => {
    let data = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(eventsForm)
    }
    return dispatch => {
      fetch(`${"/adventures"}/${adventureId}/events`, data)
      .then(resp => resp.json())
      .then(event => {
        let res = {event, adventureId}
        dispatch({type: 'ADD_EVENT', payload: res})
      })
    };
};

  // deleting events
export const deleteEvent =( id , adventure_id)=> {
  let data = {
    method: 'DELETE',
    headers: {'Accept': 'application/json','Content-Type': 'application/json'
    }
  } 
    return dispatch => {
      fetch(`${"/adventures"}/${adventure_id}/${"events"}/${id}`, data)
      .then(res => res.json())
      .then(event =>
        dispatch({type: 'DELETE_EVENT', payload: event})
      )
    };
};
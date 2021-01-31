export default function EventsReducer(state = {eventListData: [], loading: false}, action) {
    switch(action.type){
        case 'FETCH_EVENTS':
            return {...state, eventListData: action.payload.events}
        case 'LOADING_EVENTS':
            return {...state, loading: true}
        case 'ADD_EVENT':
<<<<<<< HEAD
        debugger
            return {...state, eventListData: action.payload.event}
=======
            console.log('ADD_EVENT', action.payload)
            return {...state, eventListData:[...state.eventListData, action.payload.event]}
>>>>>>> 233b4a82abe60817060ee7254d9b687b3f887b3f
        case 'DELETE_EVENT':
            return {...state, loading: false, eventListData: state.eventListData.filter(event => event.id !== action.payload.id )}
        default:
           return state;
    }
}
export default function EventsReducer(state = {eventListData: [], loading: false}, action) {
    switch(action.type){
        case 'FETCH_EVENTS':
            return {...state, eventListData: action.payload.eventList}
        case 'LOADING_EVENTS':
            return {...state, loading: true}
        case 'ADD_EVENT':
            console.log('ADD_EVENT', action.payload)
            return {...state, eventListData:[...state.eventListData, action.payload.event]}
        case 'DELETE_EVENT':
            return {...state, loading: false, eventListData: state.eventListData.filter(event => event.id !== action.payload.id )}
        default:
           return state;
    }
}
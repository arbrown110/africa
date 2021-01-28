import { combineReducers } from 'redux'
import AdventuresReducer from './AdventuresReducer'
import EventsReducer from './EventsReducer'

const roots = combineReducers({
    adventuresList: AdventuresReducer,
    eventList: EventsReducer
})

export default roots;
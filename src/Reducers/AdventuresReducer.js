export default function AdventuresReducer(state = {adventures: [], events: []}, action) {
    switch(action.type){
        case 'FETCH_ADVENTURES':
            return {adventures: action.payload}
        case 'ADD_ADVENTURE':
            return {...state, adventures: [...state, action.payload] } 

      case 'ADD_EVENT':
        let adventures = state.adventures.map(adventure => {
          if (adventure.id === action.payload.id) {
            return action.payload
          } else {
            return adventure
          }
        })
        return {...state, adventures: adventures}
      case 'DELETE_EVENT':
        let adventuresTwo = state.adventures.map(adventure => {
          if (adventure.id === action.payload.id) {
            return action.payload
          } else {
            return adventure
          }
        })
        return {...state, adventures: adventuresTwo}

      default:
        return state
    }
}
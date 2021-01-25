export default function AdventuresReducer(state = {adventures: [], events: []}, action) {
    switch(action.type){
        case 'FETCH_ADVENTURES':
            return action.payload
        case 'ADD_ADVENTURE':
            return [...state, action.payload]  

      case 'ADD_EVENT':
        let adventure = state.adventure.map(adventure => {
          if (adventure.id === action.payload.id) {
            return action.payload
          } else {
            return adventure
          }
        })
        return {...state, adventure: adventure}
      case 'DELETE_EVENT':
        let adventureTwo = state.adventure.map(adventure => {
          if (adventure.id === action.payload.id) {
            return action.payload
          } else {
            return adventure
          }
        })
        return {...state, adventure: adventureTwo}

      default:
        return state
    }
}
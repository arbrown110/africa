export default function AdventuresReducer(state = {adventuresListData: [], adventureData: [], loading: false}, action) {
    switch(action.type){
      case 'FETCH_ADVENTURES':
        return {...state, loading: false, adventuresListData: action.payload}
      case 'LOADING_ADVENTURES':
        return {...state, loading: true}
      case 'FETCH_ADVENTURE':
        return {...state, loading: false, adventureData: action.payload}
      case 'ADD_ADVENTURE':
        return {...state, adventuresListData:[...state.adventuresListData, action.payload]}
      case 'DELETE_ADVENTURE':
        return{...state, loading: false, adventuresListData: state.adventuresListData.filter(adventure => adventure.id !== action.payload.id)}
      default:
        return state;
    }
  }
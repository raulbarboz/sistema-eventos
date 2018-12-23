// Stuffs Reducers

const stuffsReducerDefaultState = [];

export default(state = stuffsReducerDefaultState, action) => {
  switch(action.type) {
    case 'ADD_STUFF':
        return [...state, action.stuff]
    case 'REMOVE_STUFF':
        return state.filter(({id}) => id !== action.id )
    case 'EDIT_STUFF':
        return state.map((stuff) => {
          if (stuff.id === action.id) {
            return {
              ...stuff,
              ...action.updates
            }
          } else {
            return stuff;
          }
        })
    case 'SET_STUFFS':
     return action.stuffs;
    default:
      return state;
  }
};


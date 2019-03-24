// Events Stuffs Reducers

const eventsStuffsReducerDefaultState = [];

export default(state = eventsStuffsReducerDefaultState, action) => {
  switch(action.type) {
    case 'READ_EVENTS_STUFFS':
     return action.events_stuffs;
    default:
      return state;
  }
};
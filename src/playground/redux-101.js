import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const setCount = ({ setTo = 1 } = {}) => ({
  type: 'SET',
  setTo
})

const resetCount = () => ({
  type: 'RESET'
})

const countReducer = (state = { count: 0 }, action) => {
  switch(action.type){
    case 'INCREMENT':
     return {
       count: state.count + action.incrementBy
     };
    case 'DECREMENT':
     return {
       count: state.count - action.decrementBy
     }
    case 'SET':
     return {
       count: action.setTo
     }
    case 'RESET':
     return {
       count: 0
     }
    default:
    return state;
  }
}

const store = createStore(countReducer)

console.log(store.getState());

store.dispatch(incrementCount({ incrementBy:5 }))
store.dispatch(decrementCount({ decrementBy:4 }))
store.dispatch(setCount({ setTo:4 }))
store.dispatch(resetCount())

console.log(store.getState());

// INCREMENT DECREMENT SET RESET

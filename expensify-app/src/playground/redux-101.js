import { createStore } from 'redux';


// Action generators
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = (count = 101) => ({
  'type': 'SET',
  count
});

const resetCount = () => ({
  'type': 'RESET'
});


// Redux actions (is that what they're called?)
const store = createStore((state = { count: 0 }, action) => {
  console.log('running');

  switch (action.type) {
    case 'INCREMENT':
      return {
        'count': state.count + action.incrementBy
      };
    case 'DECREMENT':
      const dec = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        'count': state.count - dec
      };
    case 'SET':
      return {
        'count': action.count
      };
    case 'RESET':
      return {
        'count': 0
      };
    default:
      return state;
  }
});


// Can just call unsubscribe() to stop seeing console messages on state mutation events.
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(incrementCount());
store.dispatch(resetCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount(10));
store.dispatch(setCount(101));

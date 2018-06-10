import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid()
    description,
    note,
    amount,
    createdAt
  }
});

// Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      // The following is WRONG.
      //state.expenses.push(action.expense);

      // This is the correct way to do it. Don't mutate state, just return a new one.
      return state.concat(action.expense);

    default:
      return state;
  }
};

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date', // date or amount
  startDate: undefined,
  endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Store creation
const store = createStore(combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer
}));

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addExpense({
  description: 'Rent',
  amount: 100 // $1.00
}));

const demoState = {
  expenses: [{
    id: 'aowiejfao',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};

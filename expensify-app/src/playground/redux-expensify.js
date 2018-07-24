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
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

const removeExpense = (id) => ({
  type: 'REMOVE_EXPENSE',
  id
});

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

const setTextFilter = (text) => ({
  type: 'SET_TEXT_FILTER',
  text
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

    case 'REMOVE_EXPENSE':
      return state.filter(
        ({ id }) => id !== action.id
      );

    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense;
        }
      });

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
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };

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
  console.log(JSON.stringify(
    store.getState(),
    null,
    4
  ));
});


// Add rent and coffee to expenses.
const rent = store.dispatch(addExpense({
  description: 'Rent',
  amount: 190000 // $1,900.00
}));

const coffee = store.dispatch(addExpense({
  description: 'Coffee',
  amount: 300 // $3.00
}));

// Coffee is now more expensive.
store.dispatch(editExpense(coffee.expense.id, { 'amount': 500 }));

// Remove coffee from expenses.
store.dispatch(removeExpense(coffee.expense.id));

store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter(''));

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

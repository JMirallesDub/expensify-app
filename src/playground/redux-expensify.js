// import { createStore, combineReducers } from 'redux';
// import { addExpense, editExpense, removeExpense } from 'expenses';



// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visibleExpenses);
// });

// const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 35000 }));
// const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 2.5, createdAt: 25000 }));

// // store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// // store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// //store.dispatch(setTextFilter('coffee'));
// // store.dispatch(setTextFilter());

// //store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
 
 
// //  store.dispatch(setStartDate(125));
// //  store.dispatch(setStartDate());
// //  store.dispatch(setEndDate(1250));


// const demoState = {
//     expenses: [{
//         id: '32432424',
//         description: 'January Rent',
//         note: 'Payment rent',
//         amount: 544500,
//         createdAt: 0
//     }],
//     filters: {
//         text: 'rent',
//         sortBy: 'amount', // date or amount
//         startDate: undefined,
//         endDate: undefined
//     }
// };

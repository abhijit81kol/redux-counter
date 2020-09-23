const redux = require('redux');
const createStore = redux.createStore;

//Initialize an initial state
const initialState = {
    counter: 0
}

//Reducer
//Reducer gets 2 arguments. 1st is the old state and 2nd is action
//and then function will return updated state
const rootReducer = (state = initialState, action) => { //we can initialize value in state. This is ES6 feature.
    if(action.type==='INC_COUNTER'){
        return {
            ...state,
            counter: state.counter +1
        }
    }
    if(action.type==='ADD_COUNTER'){
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state;
};

//Store
//we need to pass reducer in store
const store = createStore(rootReducer);
console.log(store.getState()); //getState will rerutn the updated state

//Subscription
store.subscribe(()=>{
    console.log('[Subscription]', store.getState());
});

//Dispatching Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());
const redux = require('redux');

//we need to create a store, a reducer, an action and component

// 2 Create a reducer function, it's only receive state and action, then return the new state
const counterReducer = (state = {counter: 0}, action) => {

    if (action.type === 'increment') {
        return {
            //the structue is up to us, we use any kind of structure that's best for our project
            counter: state.counter + 1
        };
    }

    if (action.type === 'decrement') {
        return {
            //the structue is up to us, we use any kind of structure that's best for our project
            counter: state.counter - 1
        };
    }

    return state;

};


// 1 Create a store
const store = redux.createStore(counterReducer);//the store need to know which reducer is responsible for changing this store


// 3 we need someone who subscribe to the store , subscriber function
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState)
};

store.subscribe(counterSubscriber);

// 4 we need an action which can be dispatch
    //This will re execute the reducer function
store.dispatch({type: 'increment'});
store.dispatch({type: 'decrement'});

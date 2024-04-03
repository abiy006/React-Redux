install redux ... get the command from react_redux_codes file
create a store directory in side src folder

create slice file inside store folder
    import { createSlice } from '@reduxjs/toolkit';
    createSlice and then give name, initialState, and reducers values
    export the slice actions and export the slice as a default

create index.js file inside store folder, used to setup redux store
    import { configureStore } from "@reduxjs/toolkit";
    import your slice from slice file (import uiSlice from "./ui-slice";)
    configureStore and then setup the root reducer (can be single reducer function or a map of reducer functions)
        give a key for each mapped reduceres
        and pointed at the slice reducer (reducer: { ui: uiSlice.reducer, })
        point to some constant variable so that we get the store. (const store = configureStore({reducer: { ui: uiSlice.reducer, }});)
        then finally export the store (export default store;)

Go to the main index.js file
import the store Provider (import { Provider } from 'react';)
import store from index file located at store forlder (import store from './store/index';)
then rapp the Provider around the <App /> (root.render(<Provider><App /></Provider>);) > this will provide our store.
Assigne the store prop of the Provider to imported store (<Provider store={store}><App /></Provider>)
Now we can utilize the redux inside of different componets 


Now to use inside of a component, go to your specific component
Create onClick event on one of your target button or something...(<button onClick={}></button>)
create a function and link to the click event of the button...(const toggleCartHandler = () => {};)
Inorder to dispatch actions from your slice, you need to import useDispatch from react-redux (import { useDispatch } from 'react-redux';) and import your actions from your slice file (import uiActions from '../../store/ui-slice';)
Then put the dispatch into const variable (const dispatch = useDispatch();)
Then inside your onClick function, call dispatch and your actions methods (dispatch(uiActions.toggle());)


















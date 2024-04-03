1.  install redux ... get the command from react_redux_codes file

2.  create a store directory in side src folder

3.  create slice file inside store folder
    a.  import { createSlice } from '@reduxjs/toolkit';
    b.  call createSlice(), it accepts an object ... and then give 
        1.  name,
        2.  initialState, accepts an object of initialValue
        3.  and reducers, accepts an object of methods 

4.  export the slice actions as a named export
5.  export the slice itself as a default

6.  create index.js file inside store folder, used to setup redux store
    a.  import { configureStore } from "@reduxjs/toolkit";
    b.  import your slice from slice file (import uiSlice from "./ui-slice";)
    c.  call configureStore(), it accepts an object ...
        1.  reducer, it can be a single reducer or a map of reducers which is an object
    => a, b, and c, can give as our store
    => configureStore and then setup the root reducer (can be single reducer function or a map of reducer functions)
        give a key for each mapped reduceres
        and pointed at the slice reducer (reducer: { ui: uiSlice.reducer, })
        point to some constant variable so that we get the store. (const store = configureStore({reducer: { ui: uiSlice.reducer, }});)
        then finally export the store (export default store;)
=> We need to provide it to the application to use it
7.  Go to the main index.js file
    a.  import the store Provider (import { Provider } from 'react-redux';)
    b.  then rapp the Provider around the <App /> => (root.render(<Provider><App /></Provider>);) > this will provide our store.
    c.  import store from index file located at store forlder (import store from './store/index';)
    d.  assigne the store prop of the Provider to imported store (<Provider store={store}><App /></Provider>)
=> Now we can utilize the redux inside of different componets 


8.  Now to use inside of a component, go to your specific component (CartButton.js)
9.  import your names actions (you get them from step 4) from your slice file (import uiActions from '../../store/ui-slice';)
10.  create a handler function ...(const toggleCartHandler = () => {};)
    a.  Insidet your function, you can now dispatch your actions
    b.  Inorder to dispatch actions from your slice, you need to import useDispatch from react-redux (import { useDispatch } from 'react-redux';)
    c.  Execute (const dispatch = useDispatch();) in side your component function.
    d.  Execute your actions (dispatch(uiActions.toggle());) in side your handler function.
11. and link the handler function to the click event of your target button...(<button onClick={toggleCartHandler}></button>)

=> Now we want to render something based on the above ui slice state value
12. Go to the target component (App.js)
13. import useSelector (import { useSelector } from "react-redux";)
14. Execute inside the main component (const showCart = useSelector((state) => state.ui.cartIsVisible);)
    a.  use ui from the index.js file which is the main store reducer name, cus I'm using the map of reducers so than I'm now specific to that particular reducer
    b.  use cartIsVisible state propertie value which we are interested in
    c.  then use the showCart variable to conditionaly show the card component ({showCart && <Cart />})



















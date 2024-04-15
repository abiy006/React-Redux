1.  install redux ... get the command from react_redux_codes file

2.  create a store directory in side src folder

3.  create slice file inside store folder
    a.  import { createSlice } from '@reduxjs/toolkit';
    b.  call createSlice(), it accepts an object ... and then give 
        1.  name, ... =>    name: 'ui',
        2.  initialState, accepts an object of initialValue ... =>     initialState: { cartIsVisible: false},
        3.  and reducers, accepts an object of methods ... =>
            reducers: {
                toggle(state) {
                    state.cartIsVisible = !state.cartIsVisible;
                }
            }
        4. store the ui slice to constant varibale =>   const uiSlice = createSlice....
4.  export the ui slice actions as a named export =>    export const uiActions = uiSlice.actions;
5.  export the ui slice itself as a default =>  export default uiSlice;

6.  create index.js file inside store folder, used to setup redux store
    a.  import { configureStore } from "@reduxjs/toolkit";
    b.  import your ui slice from slice file (import uiSlice from "./ui-slice";)
    c.  call configureStore(), it accepts an object ... =>
        const store = configureStore({});
        1.  reducer, it can be a single reducer or a map of reducers ...
            const store = configureStore({
                reducer: { ui: uiSlice.reducer, }
            });
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


# ####################################################################################################################

3.  create slice file inside store folder
    a.  import { createSlice } from '@reduxjs/toolkit';
    b.  call createSlice(), it accepts an object ... and then give 
        1.  name, ... =>    name: 'cart',
        2.  initialState, accepts an object of initialValue ... =>
    
            initialState: { 
                items: [],
                totalQuantity: 0,
                // totalAmount: 0,
            },

        3.  and reducers, accepts an object of methods ... =>     

            reducers: {
                    addItemToCart(state, action) {
                        const newItem = action.payload;
                        const existingItem = state.items.find(item => item.id === newItem.id);
                        if (!existingItem) {
                            state.items.push({
                                itemId: newItem.id,
                                price: newItem.price,
                                quantity: 1,
                                totalPrice: newItem.price,
                                name: newItem.title
                                
                            })
                        }
                    },
                    removeItemToCart(state) {
                        state.cartIsVisible = !state.cartIsVisible;
                    }
            }
        4.  store the cart slice to constant variable =>    const cartSlice = createSlice....
4.  export the slice actions as a named export  =>  export const cartActions = cartSlice.actions;
5.  export the cart slice itself as a default =>    export default cartSlice;

6.  merge this cart slice to overall redux store => goto index.js file inside store folder
                <!-- a.  import { configureStore } from "@reduxjs/toolkit"; // this is already done on the first ui slice -->
    b.  import your cart slice from slice file (import cartSlice from "./cart-slice";)
                <!-- c.  call configureStore(), it accepts an object ...  // this is already done on the first ui slice -->
    d.  merge to the existing reducer, now the reducer is a map of reducers ...
        reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer }
    => b, and d, can modify and add our new cart into our store now
                <!-- => configureStore and then setup the root reducer (can be single reducer function or a map of reducer functions)
                    give a key for each mapped reduceres
                    and pointed at the slice reducer (reducer: { ui: uiSlice.reducer, })
                    point to some constant variable so that we get the store. (const store = configureStore({reducer: { ui: uiSlice.reducer, }});)
                    then finally export the store (export default store;) -->
                <!-- => We need to provide it to the application to use it
                7.  Go to the main index.js file
                    a.  import the store Provider (import { Provider } from 'react-redux';)
                    b.  then rapp the Provider around the <App /> => (root.render(<Provider><App /></Provider>);) > this will provide our store.
                    c.  import store from index file located at store forlder (import store from './store/index';)
                    d.  assigne the store prop of the Provider to imported store (<Provider store={store}><App /></Provider>)
                => Now we can utilize the redux inside of different componets  -->

<!-- setting up products slice will be a nice practice, specially when we add or delete or update products, we did'nt do that for now, so wil add a 
dummy product inside products.js -->
8.  Add DUMMY_PRODUCTS array of data inside Products.js file, which must include id, price, and title
9.  Use this DUMMY_PRODUCTS to dynamiclly add ProductItem
        {DUMMY_PRODUCTS.map(product =>         
        <ProductItem
          key = {product.id}
          title = {product.title}
          price =  {product.price}
          description =  {product.description}
        />)}
10. We need to go to ProductItem.js and wired up to one of our cart reducer action which is 'addItemToCart' to the target button onclick event
    1.  import useDispatch inorder to access the redux store =>     import { useDispatch } from 'react-redux';
    2.  execute useDispatch() in side ProductItem.js component to get access to that dispatch function =>     const dispatch = useDispatch();
    3.  create addToCartHandler function inside ProductItem.js component =>       const addToCartHandler = () => {};
    4.  call dispatch() inside addToCartHandler =>      dispatch();
    5.  import the cart actions from cart-slice.js =>       import { cartActions } from '../../store/cart-slice';
    6.  then execute addItemToCart inside the dispatch() =>        dispatch(cartActions.addItemToCart());
        a.  pass the payload inside addItemToCart() as an object => 
            dispatch(cartActions.addItemToCart({
                <!-- id: id, -->
                id,
                title,
                price,
            }));
    7.  connect addToCartHandler to the target button =>    <button onClick={addToCartHandler}>Add to Cart</button>

11. We need to update the cart badge to see the number of product items added
    1.  Go to the target component where the cart badge is located =>   CartButton.js
        =>  We already dispatch, now we need data from the cart.
        a.  import useSelector to read data from the store ... =>   import { useDispatch, useSelector } from 'react-redux';
        b.  then select a piece of data using the imported useSelector ... =>  const cartQuantity = useSelector(state => state.cart.totalQuantity);
            i.  'cart' is the name assigned at index.js when I create reducer ... => cart: cartSlice.reducer
            ii. 'totalQuantity' is the target property I'm currently looking for 
12. We also need to update cart based on the selected product items
    1.  Go to the target component to display the cart => Cart.js
        a.  import useSelector to read data from the store ... =>   import { useSelector } from 'react-redux';
        b.  then select the items array using the imported useSelector ... =>   const cartItems = useSelector((state) => state.cart.items);
        c.  then map each items array to CartItem component ... =>
            {cartItems.map((itemX) => (
            <CartItem
                item={{
                title: itemX.name,
                quantity: itemX.quantity,
                total: itemX.totalPrice,
                price: itemX.price,
                }}
            />
            ))}
13. We also need to go to CartItem.js and dispatch add and remove cart itmes when the + and - buttons are clicked
    1.  import useDispatch inorder to access the redux store =>     import { useDispatch } from 'react-redux';
    2.  import the cart actions from cart-slice.js =>       import { cartActions } from '../../store/cart-slice';
    3.  execute useDispatch() in side CartItem.js component to get access to that dispatch function =>     const dispatch = useDispatch();
    4.  we need to create add and remove handler functions to wired up to the target buttons
        a.  addItemHandler ... => const addItemHandler = () => {};
            i.  dispatch add actions using cart actions inside addItemHandler function ... => 
                const addItemHandler = () => {
                    dispatch(cartActions.addItemToCart({}));
                };

            ii. addItemToCart() needs a payload to add item, get it from the props ... =>
                const addItemHandler = () => {
                    dispatch(cartActions.addItemToCart({
                        id,
                        title,
                        price
                    }));
                };

        b.  removeItemHandler ... => const removeItemHandler = () => {};
            i. dispatch remove actions using cart actions inside removeItemHandler function ... => 
                const removeItemHandler = () => {
                    dispatch(cartActions.removeItemFromCart());
                };

            ii. removeItemFromCart() needs a payload to remove the item, get it from the props ... =>
                const removeItemHandler = () => {
                    dispatch(cartActions.removeItemFromCart(id));
                };
    5.  now wire up those two functions to the target buttons on click event ... =>
            <button onClick={removeItemHandler}>-</button>
            <button onClick={addItemHandler}>+</button>














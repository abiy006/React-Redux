import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: { 
        items: [],
        totalQuantity: 0,
        // totalAmount: 0,
    },
    reducers: {
        addItemToCart(state, action) {
            const 
        },
        removeItemToCart(state) {
            state.cartIsVisible = !state.cartIsVisible;
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;
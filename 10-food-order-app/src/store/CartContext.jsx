import { createContext } from "react";

const CartContext = createContext({
    //used for better autocompletions
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {}
});

export function CartContextProvider({ children}) {
    return <CartContext.Provider>{children}</CartContext.Provider>
}

export default CartContext;
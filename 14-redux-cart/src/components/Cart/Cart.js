import { useSelector } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((itemX) => (
          <CartItem
            key={itemX.id}
            item={{
              id: itemX.id,
              title: itemX.name,
              quantity: itemX.quantity,
              total: itemX.totalPrice,
              price: itemX.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;

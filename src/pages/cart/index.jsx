import { useCart } from "../../context/cartContext";
import styles from "./styles.module.css";
import CartCard from "../../components/cartCard";
function Cart() {
  const { cartItems } = useCart();
  const totalPrice = cartItems.reduce(
    (total, item) => total + parseFloat(item.price),
    0
  );
  return (
    <div className={styles.Cart}>
      <h1>Корзина</h1>
      {cartItems.lenght === 0 ? (
        <p>your cart is empty.</p>
      ) : (
        <>
          <div>
            {cartItems.map((item) => (
              <CartCard key={item.id} product={item} />
            ))}
          </div>
          <div>Цена: {totalPrice.toLocaleString()}</div>
        </>
      )}
    </div>
  );
}

export default Cart;

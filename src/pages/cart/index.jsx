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
      <hr className={styles.topLine} />
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className={styles.cartContainer}>
          <div className={styles.cartItems}>
            {cartItems.map((item) => (
              <CartCard key={item.id} product={item} />
            ))}
          </div>

          <div className={styles.basketOverview}>
            <h5>Итого</h5>
            <div className={styles.cartSummary}>
              {cartItems.map((item) => (
                <p key={item.id}>{item.name}</p>
              ))}
            </div>
            <hr className={styles.bottomLine} />
            <div className={styles.totalPriceWrapper}>
              <p className={styles.totalLabel}>Цена:</p>
              <p className={styles.totalAmount}>
                {totalPrice.toLocaleString()} €
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;

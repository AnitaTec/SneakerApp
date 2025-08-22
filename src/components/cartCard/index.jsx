import { useCart } from "../../context/cartContext";
import styles from "./styles.module.css";
import basketIcon from "../../assets/icons/basket.svg";

function CartCard({ product }) {
  const { removeFromCart } = useCart();
  const handleRemove = () => {
    removeFromCart(product.id);
  };

  return (
    <div className={styles.cartCard}>
      <img
        className={styles.productImg}
        src={product.image}
        alt={product.name}
      />
      <h4>{product.name}</h4>
      <div className={styles.priceWrapper}>
        <p className={styles.priceText}>
          Цена: <br />{" "}
          <span className={styles.priceValue}>{product.price} €</span>
        </p>
        <button onClick={handleRemove}>
          <img className={styles.basketImg} src={basketIcon} alt="delete" />
        </button>
      </div>
    </div>
  );
}

export default CartCard;

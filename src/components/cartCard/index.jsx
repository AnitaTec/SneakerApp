import { useCart } from "../../context/cartContext";

function CartCard({ product }) {
  const { removeFromCart } = useCart();
  const handleRemove = () => {
    removeFromCart(product.id);
  };
  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <div>
        Цена:
        <p>{product.price}€</p>
        <button onClick={handleRemove}>Delite</button>
      </div>
    </div>
  );
}

export default CartCard;

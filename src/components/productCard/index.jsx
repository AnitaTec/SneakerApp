import { useState, useEffect } from "react";
import { BASE_URL } from "../../context/cartContext";
import axios from "axios";
import styles from "./styles.module.css";
import addImg from "../../assets/icons/add.svg";
import addImgDark from "../../assets/icons/add-dark.svg";
import { useCart } from "../../context/cartContext";

function ProductCard() {
  const [products, setProducts] = useState([]);
  const [hoveredId, setHoveredId] = useState(null);
  const { addToCart } = useCart();

  async function fetchProducts() {
    try {
      const response = await axios.get(`${BASE_URL}/products`);
      setProducts(response.data);
    } catch (error) {
      console.error("Error occured when fetching products: ", error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className={styles.productsWrapper}>
      <div className={styles.productsGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <img
              src={product.image}
              alt={product.name}
              className={styles.image}
            />
            <h2 className={styles.title}>{product.name}</h2>
            <div className={styles.priceButtonWrapper}>
              <p className={styles.price}>
                Цена:{" "}
                <span className={styles.priceValue}>{product.price} €</span>
              </p>
              <button
                className={styles.addButton}
                onClick={() => addToCart(product)}
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <img
                  className={styles.add}
                  src={hoveredId === product.id ? addImgDark : addImg}
                  alt="add"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;

import { useState, useEffect } from "react";
import { BASE_URL } from "../../context/cartContext";
import axios from "axios";
import styles from "./styles.module.css";
import addImg from "../../assets/icons/add.svg";
import addImgDark from "../../assets/icons/add-dark.svg";

function ProductCard() {
  const [products, setProducts] = useState([]);
  const [hoveredId, setHoveredId] = useState(null);

  async function fetchProducts() {
    try {
      const response = await axios.get(`${BASE_URL}/productData`);
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
        {products.map(({ id, name, price, image }) => (
          <div key={id} className={styles.card}>
            <img src={image} alt={name} className={styles.image} />
            <h2 className={styles.title}>{name}</h2>
            <div className={styles.priceButtonWrapper}>
              <p className={styles.price}>
                Цена: <span className={styles.priceValue}>{price} €</span>
              </p>
              <button
                onMouseEnter={() => setHoveredId(id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <img
                  className={styles.add}
                  src={hoveredId === id ? addImgDark : addImg}
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

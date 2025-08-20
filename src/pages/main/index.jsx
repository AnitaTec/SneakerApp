import News from "../../components/news";
import ProductCard from "../../components/productCard";
import styles from "./styles.module.css";

function Main() {
  return (
    <div className={styles.container}>
      <main>
        <News />
        <div className={styles.products}>
          <h1>Товары</h1>
          <hr />
        </div>
        <ProductCard />
      </main>
    </div>
  );
}

export default Main;

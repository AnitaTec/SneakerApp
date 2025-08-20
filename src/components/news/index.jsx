import styles from "./styles.module.css";
import bannerImg from "../../assets/img/Banner.png";

function News() {
  return (
    <div className={styles.banner}>
      <img src={bannerImg} alt="News banner" />
    </div>
  );
}

export default News;

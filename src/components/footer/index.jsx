import React from "react";
import facebookImg from "../../assets/icons/facebok.svg";
import instagramImg from "../../assets/icons/instagram.svg";
import twitterImg from "../../assets/icons/twitter.svg";
import styles from "./styles.module.css";

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div>
          <p className={styles.info}>Контакты</p>

          <div className={styles.contactInfo}>
            <p>8 800 000 00 00</p>
            <p className={styles.email}>emailexample@email.com</p>
          </div>

          <div className={styles.year}>
            2024 Сникер-магазин. Все права защищены
          </div>
        </div>

        <div className={styles.footerRight}>
          <div className={styles.links}>
            <a href=".">
              <img src={facebookImg} alt="facebook" />
            </a>
            <a href=".">
              <img src={twitterImg} alt="instagram" />
            </a>
            <a href=".">
              <img src={instagramImg} alt="twitter" />
            </a>
          </div>
          <input
            className={styles.footerInput}
            type="text"
            placeholder="Введите свой email:"
          />
        </div>
      </footer>
    </>
  );
}

export default Footer;

import { useState } from "react";
import styles from "./styles.module.css";
import fbIcon from "../../assets/icons/fb.svg";
import snapIcon from "../../assets/icons/snap.svg";
import twittIcon from "../../assets/icons/twitt.svg";

function Contacts() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className={styles.box}>
      <h1>Контакты</h1>
      <hr className={styles.cotactLine} />
      <div className={styles.contactInfo}>
        <ul>
          <li>8 800 000 00 00</li>
          <li>emailexample@email.com</li>
        </ul>
      </div>
      <div className={styles.formWrapper}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <input
              type="text"
              placeholder="Ваше имя"
              className={styles.inputSmall}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Ваш email"
              className={styles.inputSmall}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <textarea
            placeholder="Введите сообщение"
            className={styles.textarea}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <div className={styles.buttonWrapper}>
            <button type="submit">Отправить</button>
          </div>
        </form>
        <div className={styles.findUs}>
          <p>Найдите нас:</p>
          <div className={styles.icons}>
            <img src={snapIcon} alt="" />
            <img src={fbIcon} alt="" />
            <img src={twittIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;

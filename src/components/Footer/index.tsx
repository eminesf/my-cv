import styles from "./styles.module.css";

import {
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";

export function Footer() {
  return (
    <div className={styles.footer}>
      <ul className="flex space-x-3">
        <li>
          <a href="https://www.linkedin.com/in/emiliano-da-silveira-fucks-64b8a1a5/">
            <AiOutlineLinkedin className={styles.icons} />
          </a>
        </li>
        <li>
          <a href="https://fb.com/emilianofuchs">
            <AiOutlineFacebook className={styles.icons} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/emilianofuchs/">
            <AiOutlineInstagram className={styles.icons} />
          </a>
        </li>
        <li>
          <a href="mailto:emilianofuchs@gmail.com">
            <AiOutlineMail className={styles.icons} />
          </a>
        </li>
      </ul>
    </div>
  );
}

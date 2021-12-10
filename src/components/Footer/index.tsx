import styles from "./styles.module.css";

import {
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineGithub,
} from "react-icons/ai";

export function Footer() {
  return (
    <div className={styles.footer}>
      <ul className="flex space-x-3">
        <li>
          <a
            href="https://www.linkedin.com/in/emiliano-da-silveira-fucks-64b8a1a5/"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineLinkedin className={styles.icons} />
          </a>
        </li>
        <li>
          <a href="https://github.com/eminesf" target="_blank" rel="noreferrer">
            <AiOutlineGithub className={styles.icons} />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/emilianofuchs/"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineInstagram className={styles.icons} />
          </a>
        </li>
        <li>
          <a
            href="mailto:emilianofuchs@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineMail className={styles.icons} />
          </a>
        </li>
      </ul>
    </div>
  );
}

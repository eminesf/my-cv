import styles from "./styles.module.css";

import {
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineGithub,
} from "react-icons/ai";

export function Footer() {
  const linkedin =
    "https://www.linkedin.com/in/emiliano-da-silveira-fucks-64b8a1a5/";
  const github = "https://github.com/eminesf";
  const instagram = "https://www.instagram.com/emilianofuchs/";

  return (
    <div className={styles.footer}>
      <ul className={styles.icons}>
        <li>
          <a href={linkedin} target="_blank" rel="noreferrer">
            <AiOutlineLinkedin className={styles.icon} />
          </a>
        </li>
        <li>
          <a href={github} target="_blank" rel="noreferrer">
            <AiOutlineGithub className={styles.icon} />
          </a>
        </li>
        <li>
          <a href={instagram} target="_blank" rel="noreferrer">
            <AiOutlineInstagram className={styles.icon} />
          </a>
        </li>
        <li>
          <a
            href="mailto:emilianofuchs@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineMail className={styles.icon} />
          </a>
        </li>
      </ul>
      <div className={styles.rights}>
        <span className="text-xs md:text-lg">
          Site criado por{" "}
          <a href={linkedin} target="_blank" rel="noreferrer">
            Emiliano Fucks
          </a>
          . Todos direitos reservados. &#174;
        </span>
      </div>
    </div>
  );
}

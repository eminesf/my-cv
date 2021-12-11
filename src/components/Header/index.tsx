import styles from "./styles.module.css";

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <a href="/">E</a>
      </div>
      <div className="flex items-center">
        <ul className="flex space-x-5 md:space-x-8 items-center p-5">
          <li className={styles.lines}>
            <a href="/">Home</a>
          </li>
          <li className={styles.lines}>
            <a href="https://google.com.br">About me</a>
          </li>
          <li className={styles.lines}>
            <a href="https://google.com.br">Contact</a>
          </li>
          <li className={styles.lines}>
            <a href="https://google.com.br">Blog</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

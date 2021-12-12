import { TypewriterEffect } from "../TypewriterEffect";
import styles from "./styles.module.css";
import perfilImg from "../../assets/perfil-1200.jpg";
import bgImg from "../../assets/bg-2000.jpg";

export function Body() {
  return (
    <div className={styles.body}>
      <div className={styles.sideA}>
        <a href="/">
          <div className={styles.perfilContainer}>
            <img
              src={perfilImg}
              alt="Foto de Emiliano"
              className={styles.pic}
            />
          </div>
        </a>
        <TypewriterEffect />
      </div>
      <div className={styles.sideB}>
        <a href="/" className={styles.btn}>
          Botão
        </a>
      </div>
    </div>
  );
}

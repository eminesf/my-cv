import { TypewriterEffect } from "../TypewriterEffect";
import styles from "./styles.module.css";
import perfilImg from "../../assets/perfil-1200.jpg";
import bgImg from "../../assets/bg-2000.jpg";

export function Body() {
  return (
    <div className={styles.body}>
      <div className={styles.sideA}>
        <a href="/">
          <img
            src={bgImg}
            alt="background com código de computador"
            className={styles.bgImage}
          />
        </a>
      </div>
      <div className={styles.sideB}>
        <div className={styles.perfilContainer}>
          <img src={perfilImg} alt="Foto de Emiliano" className={styles.pic} />
        </div>
        <TypewriterEffect />
      </div>
    </div>
  );
}

import { TypewriterEffect } from "../TypewriterEffect";
import styles from "./styles.module.css";
import perfilImg from "../../assets/perfil-1200.jpg";
import { DropdownMenu } from "../DropdownMenu";

export function Body() {
  return (
    <div className={styles.body}>
      <div className={styles.dropDownMenu}>
        <DropdownMenu />
      </div>
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
          Know me
        </a>
      </div>
    </div>
  );
}

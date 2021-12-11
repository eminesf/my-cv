import { useState } from "react";
import "./styles.css";

export function MenuHamburguer() {
  const [active, setActive] = useState(false);

  function handleToggleActive() {
    if (active === false) {
      setActive(true);
    } else {
      setActive(false);
    }
  }

  return (
    <div
      className={`toggle bg-rich-black border-2 flex md:hidden ${
        active ? "active" : ""
      }`}
      onClick={handleToggleActive}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

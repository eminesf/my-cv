import { useMenu } from "../../Hooks/useMenu";
import "./styles.css";

export function MenuHamburguer() {
  const { active, handleToggleActive } = useMenu();

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

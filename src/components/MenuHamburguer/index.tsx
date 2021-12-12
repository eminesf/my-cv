import "./styles.css";

interface MenuHamburguerProps {
  onClickDropdownMenu: () => void;
  isActive: boolean;
}

export function MenuHamburguer({
  onClickDropdownMenu,
  isActive,
}: MenuHamburguerProps) {
  return (
    <div
      className={`toggle bg-rich-black border-2 flex md:hidden ${
        isActive ? "active" : ""
      }`}
      onClick={onClickDropdownMenu}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

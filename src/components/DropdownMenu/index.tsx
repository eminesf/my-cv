import { useMenu } from "../../Hooks/useMenu";
import "./styles.css";

export function DropdownMenu() {
  const { active, handleToggleActive } = useMenu();

  const headerMenu = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "About me",
      link: "https://google.com.br",
    },
    {
      id: 3,
      name: "Contact",
      link: "https://google.com.br",
    },
    {
      id: 4,
      name: "Blog",
      link: "https://google.com.br",
    },
  ];

  return (
    <div className={`dropdown ${active ? "active" : ""}`}>
      <div className="options">
        {headerMenu.map((option) => (
          <a href={option.link} onClick={handleToggleActive} key={option.id}>
            <div>
              <span>{option.name}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

import "./styles.css";

interface MenuHamburguerProps {
  onClickDropdownMenu: () => void;
  isActive: boolean;
}

export function DropdownMenu({
  onClickDropdownMenu,
  isActive,
}: MenuHamburguerProps) {
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
    <div className={`dropdown ${isActive ? "active" : ""}`}>
      <div className="options">
        {headerMenu.map((option) => (
          <a href={option.link} onClick={onClickDropdownMenu} key={option.id}>
            <div>
              <span>{option.name}</span>
            </div>
          </a>
        ))}
        {console.log(isActive)}
      </div>
    </div>
  );
}

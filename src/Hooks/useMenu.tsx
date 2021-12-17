import { createContext, useContext, ReactNode, useState } from "react";

interface MenuProviderProps {
  children: ReactNode;
}

interface DropdownMenuProps {
  handleToggleActive: () => void;
  active: boolean;
}

export const MenuContext = createContext<DropdownMenuProps>({
  active: true,
  handleToggleActive: () => {},
});

export const useMenu = () => useContext(MenuContext);

export function MenuProvider({ children }: MenuProviderProps) {
  const [active, setActive] = useState(false);

  function handleToggleActive() {
    if (active === false) {
      setActive(true);
    } else {
      setActive(false);
    }
  }

  return (
    <MenuContext.Provider value={{ active, handleToggleActive }}>
      {children}
    </MenuContext.Provider>
  );
}

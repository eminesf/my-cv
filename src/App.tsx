import { useState } from "react";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  const [active, setActive] = useState(false);

  function handleToggleActive() {
    if (active === false) {
      setActive(true);
    } else {
      setActive(false);
    }
  }

  return (
    <div className="flex flex-col">
      <Header onClickDropdownMenu={handleToggleActive} isActive={active} />
      <Body onClickDropdownMenu={handleToggleActive} isActive={active} />
      <Footer />
    </div>
  );
}

export default App;

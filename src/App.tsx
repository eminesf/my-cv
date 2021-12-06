import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { TypewriterEffect } from "./components/TypewriterEffect";

function App() {
  return (
    <div className="dark">
      <Header />
      <div className="bg-off-white h-screen flex justify-center items-center">
        <TypewriterEffect />
      </div>
      <Footer />
    </div>
  );
}

export default App;

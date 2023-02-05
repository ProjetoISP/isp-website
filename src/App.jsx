import { useState } from "react";
import GlobalStyle from "./styles/global";
import { Header } from "./components/Header/Header";
import { Carousel } from "./pages/Carousel/Carousel";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Carousel />
    </div>
  );
}

export default App;

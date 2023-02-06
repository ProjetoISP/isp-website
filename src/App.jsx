import { useState } from "react";
import GlobalStyle from "./styles/global";
import { Header } from "./components/Header/Header";
import Carousel_function from "./components/carousel__Primeiro";
import { WhoWeArePage } from "./pages/WhoWeArePage/WhoWeArePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Carousel_function/>
      <WhoWeArePage/>
      
  
    </div>
  );
}

export default App;
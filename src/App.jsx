import { useState } from "react";
import GlobalStyle from "./styles/global";
import { Header } from "./components/Header/Header";

import { WhoWeArePage } from "./pages/WhoWeArePage/WhoWeArePage";
import Carousel_function from "./components/Carousel/carousel__Primeiro";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <GlobalStyle/>
      <Header />
      <Carousel_function/>
      <WhoWeArePage/>
      
  
    </div>
  );
}

export default App;
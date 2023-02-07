import { useState } from "react";
import GlobalStyle from "./styles/global";
import { Header } from "./components/Header/Header";

import { WhoWeArePage } from "./pages/WhoWeArePage/WhoWeArePage";
import { PresentationPage, PresentationPage__carousel } from "./pages/PresentationPage/PresentationPage";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <GlobalStyle/>
      <Header /> 
      <PresentationPage__carousel/>


      <WhoWeArePage/>
  
    </div>
  );
}

export default App;
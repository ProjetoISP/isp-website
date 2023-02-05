import { useState } from "react";
import GlobalStyle from "./styles/global";
import { Header } from "./components/Header/Header";
import { PresentationPage } from "./pages/PresentationPage/PresentationPage";
import { WhoWeArePage } from "./pages/WhoWeArePage/WhoWeArePage";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <PresentationPage />
      <WhoWeArePage />
    </div>
  );
}

export default App;

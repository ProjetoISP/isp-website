import { useState } from "react";
import GlobalStyle from "./styles/global";
import { Header } from "./components/Header/Header";
import { PresentationPage } from "./pages/PresentationPage/PresentationPage";
import { WhoWeArePage } from "./pages/WhoWeArePage/WhoWeArePage";
import Footer from "./components/Footer/Footer";
import { GalleryPage } from "./pages/GalleryPage/GalleryPage";
import { ProjectsPage } from "./pages/ProjectsPage/ProjectsPage";
function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <PresentationPage />
      <WhoWeArePage />
      <ProjectsPage />
      <GalleryPage />
      <Footer />
    </div>
  );
}

export default App;

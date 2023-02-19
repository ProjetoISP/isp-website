import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { WhoWeArePage } from "../../pages/WhoWeArePage/WhoWeArePage";
import { PresentationPage } from "../../pages/PresentationPage/PresentationPage";
import { GalleryPage } from "../../pages/GalleryPage/GalleryPage";
import { ProjectsPage } from "../../pages/ProjectsPage/ProjectsPage";

export const DashboardPage = () => {
  return (
    <>
      <Header />
      <PresentationPage />
      <WhoWeArePage />
      <ProjectsPage />
      <GalleryPage />
      <Footer />
    </>
  );
};

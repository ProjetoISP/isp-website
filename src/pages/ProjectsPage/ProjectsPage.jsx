import { useState } from "react";
import { ProjectContainer } from "./styles.js";
import imagem1 from './projetosimagem.png'
import imagem2 from './projetosimagem2.png'
import { Button } from "../../components/Button/Button.jsx";

export const ProjectsPage = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      src: imagem1,
      title: 'Construindo o futuro',
      text: '  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel est tortor. Ut eget nulla vel lorem convallis semper et eu ante.  ',
    
      
    },
    {
      src: imagem2,
      title: 'Conecta geração jovem',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel est tortor. Ut eget nulla vel lorem convallis semper et eu ante.',

    },
  
  ];

  const handlePreviousClick = () => {
    setActiveIndex((activeIndex + images.length - 1) % images.length);
  };

  const handleNextClick = () => {
    setActiveIndex((activeIndex + 1) % images.length);
  };

  

  
  return (
    <ProjectContainer >
      <h2> Projetos </h2>{" "}



      <div className="carousel">
                      <button onClick={handleNextClick}>ᐸ</button>

      <div className="carousel-item">
        <img src={images[activeIndex].src} alt={images[activeIndex].title} />
        <h3>{images[activeIndex].title}</h3>
        <p>{images[activeIndex].text}</p>
        <button className="doeagora"> <p> DOE AGORA </p></button>
      </div>
      <div className="carousel-item">

        <img src={images[(activeIndex + 1) % images.length].src} alt={images[(activeIndex + 1) % images.length].title} />
        <h3>{images[(activeIndex + 1) % images.length].title}</h3>
        <p>{images[(activeIndex + 1) % images.length].text}</p>
        <button className="doeagora"><p> DOE AGORA </p></button>
      </div>
      <button onClick={handlePreviousClick}>ᐳ</button>
    </div>
    
      
    </ProjectContainer>
  );
};

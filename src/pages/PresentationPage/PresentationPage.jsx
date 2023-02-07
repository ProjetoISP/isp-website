import { Button } from "../../components/Button/Button";
import Carousel_function from "../../components/Carousel/carousel__Primeiro";
import { ContainerCarousel } from "./styles";

export const PresentationPage = () => {
  return (
<>

    
    <ContainerCarousel>
   
        <Button> Saiba Mais</Button>

    </ContainerCarousel>
    </>
  );
};

export const PresentationPage__carousel = () => {
  return(
<>
      <Carousel_function/>

</>
  )
}
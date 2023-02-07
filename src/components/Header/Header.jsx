import ispLogo from "../../assets/logo-isp.svg";
import { Button } from "../Button/Button";
import { HeaderContainer } from "./styles";

export const Header = () => {


  
  return (
    <HeaderContainer>
      
      <figure>
        <img src={ispLogo} alt="logo isp" />
      </figure>

      <nav>
        <a href="">HOME</a>
        <a href="">QUEM SOMOS</a>
        <a href="">PROJETOS</a>
        <a href="">GALERIA</a>
        <a href="">CONTATO</a>
      </nav>
      <Button> DOE AGORA </Button>
    </HeaderContainer>
  );
};

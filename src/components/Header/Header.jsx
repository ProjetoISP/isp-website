import ispLogo from "../../assets/logo-isp.svg";
import { Button } from "../Button/Button";
import DropdownMenu from "../Button/ButtonMobile/ButtonMobile";
import { HeaderContainer } from "./styles";

export const Header = () => {


  
  return (
    <HeaderContainer>
      
      <figure>
        <img src={ispLogo} alt="logo isp" />
      </figure>

      <nav>
        <a href="">Home</a>
        <a href="">Quem Somos</a>
        <a href="">Projetos</a>
        <a href="">Galeria</a>
        <a href="">Contato</a>
      </nav>
      <DropdownMenu/>
      <Button> DOE AGORA </Button>
    </HeaderContainer>
  );
};

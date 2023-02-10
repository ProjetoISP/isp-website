import mapa from "../../assets/mapa.png";
import { Form } from "../Form/Form";
import { FooterContainer } from "./styles";

export const Footer = () => {
  return (
    <FooterContainer id="contact">
      <h2> Contato</h2>
      <div className="flex">
        <Form />
        <div>
          <img src={mapa} alt="mapa da ISP"></img>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    </FooterContainer>
  );
};

import mapa from "../../assets/mapa.png";
import { Form } from "../Form/Form";
import {
  FooterContainer,
  FormContainer,
  MapContainer,
  IconContainer,
} from "./styles";

import icon1 from "../../assets/Vector.png";
import icon2 from "../../assets/Vector1.png";
import icon3 from "../../assets/Vector2.png";
import icon4 from "../../assets/Vector3.png";
import icon5 from "../../assets/Vector4.png";
import icon6 from "../../assets/Vector5.png";

export const Footer = () => {
  return (
    <FooterContainer id="contact">
      <h2> Contato</h2>
      <div className="flex">
        <FormContainer>
          <p>Fale com a gente!</p>
          <Form />
        </FormContainer>

        <MapContainer>
          <img src={mapa} alt="mapa da ISP"></img>
          <p>Rua XXX</p>
          <p>Duque de Caxias / RJ</p>
          <p>90000-000</p>
          <IconContainer>
            <img src={icon1} alt="email-icon" />
            <img src={icon2} alt="facebook-icon" />
            <img src={icon3} alt="twitter-icon" />
            <img src={icon4} alt="instagram-icon" />
            <img src={icon5} alt="linkedin-icon" />
            <img src={icon6} alt="whatsapp-icon" />
          </IconContainer>
        </MapContainer>
      </div>
      <p> ISP-SJB Todos direitos reservados CNPJ: XXXXXXX-XX</p>
    </FooterContainer>
  );
};

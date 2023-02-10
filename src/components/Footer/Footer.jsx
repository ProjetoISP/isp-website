import mapa from "../../assets/mapa.png";
import { Form } from "../Form/Form";
import { FooterContainer, FormContainer, MapContainer } from "./styles";

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
          <p></p>
          <p></p>
          <p></p>
        </MapContainer>
      </div>
    </FooterContainer>
  );
};

import { FooterContainer } from "./styles";
import mapa from "../../assets/mapa.png";

export const Footer = () => {
  return (
    <FooterContainer id="contact">
      <h2> Contato</h2>
      <div className="flex">
        <form>
          <div>
            <label>Nome</label>
            <input type="text"></input>
          </div>
          <div>
            <label>E-mail</label>
            <input type="text"></input>
          </div>
          <label>Mensagem</label>
          <input type="text"></input>
        </form>

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

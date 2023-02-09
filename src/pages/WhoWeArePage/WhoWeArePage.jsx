import React from "react";
import { MainContainer, FirstSection, SecondSection } from "./styles";

export const WhoWeArePage = () => {
  return (
    <MainContainer id="whoWeAre">
      <FirstSection>
        <div className="video-frame">
          <video></video>
        </div>
        <div>
          <h2>QUEM SOMOS</h2>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet rem
            temporibus facilis non aliquam sunt veritatis? Pariatur modi at
            placeat nihil, fuga veniam quas nam culpa vero harum? Facilis,
            nesciunt?
          </p>
          <div className="span-container">
            <span>10 anos de historia</span>
            <span>xxx atendimentos por semana</span>
            <span>150 + familias alcançadas</span>
          </div>
        </div>
      </FirstSection>
      <SecondSection>
        <div>
          <h2>Missão</h2>
          <p> Transformar o meio social das comunidades através de ações </p>
        </div>
        <div>
          <h2>Visão</h2>
          <p>
            {" "}
            Ser uma organização social de referência na co-criação de
            estratégias{" "}
          </p>
        </div>
        <div>
          <h2> Valores</h2>
          <p>
            {" "}
            Acreditamos e Impulsionamos o individuo a alcançar seus sonhos e
            objetivos
          </p>
        </div>
      </SecondSection>
    </MainContainer>
  );
};

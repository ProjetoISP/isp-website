import React from "react";
import { MainContainer, FirstSection } from "./styles";

export const WhoWeArePage = () => {
  return (
    <MainContainer>
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
    </MainContainer>
  );
};

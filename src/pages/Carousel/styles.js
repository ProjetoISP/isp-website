import styled from "styled-components";

import imgCarousel from "../../assets/carousel1.png";

export const ContainerCarousel = styled.div`
  height: 535px;
  background-color: blue;
  background-image: url(${imgCarousel});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: auto;
  mix-blend-mode: normal;
  opacity: 0.9;

  display: flex;
  justify-content: center;
  align-items: center;

  section {
    height: 283px;
    width: 688px;
    border: none;
    border-radius: 6px;
    background: rgba(245, 245, 245, 0.85);
    box-shadow: 0px 2.62133px 2.62133px rgba(0, 0, 0, 0.15);
    // refatorar para position
    margin-left: 620px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`;

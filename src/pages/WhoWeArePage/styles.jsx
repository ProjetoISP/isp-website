import styled from "styled-components";
import background from "../../assets/main-background.svg";

export const MainContainer = styled.div`
  height: 1450px;
`;

export const FirstSection = styled.section`
  height: 553px;
  background: linear-gradient(
    180deg,
    #63b2bb 34.11%,
    rgba(224, 125, 37, 0.58) 100%
  );
  display: flex;
  align-items: center;
  justify-content: space-around;

  .video-frame {
    background-color: black;
    height: 466px;
    width: 35vw;
    border-radius: 3px;
  }

  div + div {
    height: 90%;
    width: 50vw;
    h2 {
      padding: 10px;
      border-left: 7px solid #525252;
      height: 48px;
    }

    p {
      height: 140px;
      width: 598px;
      font-family: Poppins;
      font-size: 18px;
      font-weight: 500;
      line-height: 27px;
      color: #ffffff;
      text-align: center;
      margin: 20px;
    }
  }

  .span-container {
    margin: auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;

    span {
      display: block;
      height: 187px;
      width: 187px;
      left: 759px;
      top: 909px;
      border-radius: 50%;
      background-color: #20b1c1;
    }
  }
`;

export const SecondSection = styled.section`
  height: 230px;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #525252;
  display: flex;
  align-items: center;
  justify-content: space-around;

  div {
    height: 150px;

    h2 {
      font-family: Poppins;
      font-size: 32px;
      font-weight: 900;
      line-height: 48px;
      text-align: center;
      color: #fe6c05;
    }

    p {
      font-family: Poppins;
      font-size: 18px;
      font-weight: 800;
      line-height: 27px;
      text-align: center;
      color: #f5f5f5cc;
      padding: 20px;
      width: 25vw;
    }
  }
`;

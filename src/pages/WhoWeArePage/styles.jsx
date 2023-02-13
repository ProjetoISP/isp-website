import styled from "styled-components";
import background from "../../assets/main-background.svg";
import backgroundThirdSection from "../../assets/rectangle.png";

export const MainContainer = styled.div`
  height: 1450px;
`;

export const FirstSection = styled.section`
  .section__empresa {
    background: linear-gradient(
      180deg,
      #63b2bb 34.11%,
      rgba(224, 125, 37, 0.58) 100%
    );
    height: 815px;
    margin-top: 50px;
  }

  iframe {
    display: block;
    margin: 15px auto 10px auto;
    height: 220px;
    width: 95%;
  }

  .section__quem {
    margin: auto auto 35px auto;
    padding-top: 20px;

    width: 80%;
  }

  .titulo__empresa {
    border-left: 3px solid #525252;

    color: #525252;
    font-family: "Roboto";
    font-size: 28px;
    font-weight: 800;
    text-align: left;
    text-transform: uppercase;

    padding: 5px 0 0 10px;

    margin-bottom: 30px;

    height: 38px;
  }

  .paragrafo__empresa {
    position: relative;
    bottom: 15px;
    color: #ffffff;
    font-family: "Poppins";
    font-size: 14px;
    font-weight: 600;
    line-height: 21px;
    text-align: left;
  }

  .empresa__info {
    margin: auto;
    width: 80%;
  }

  .circle__info {
    background: #20b1c1;
    border-radius: 50%;

    color: #f5f5f5;
    font-family: "Roboto";
    font-size: 18px;
    font-weight: 600;
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: auto;
    margin-bottom: 25px;

    width: 121px;
    height: 121px;
  }

  .circle__paragrafo--wrap {
    word-wrap: wrap;
    width: 70%;
  }

  .cirlce--wrap {
    word-break: break-word;
  }

  @media (min-width: 640px) {
    .section__empresa {
      height: 580px;
    }

    iframe {
      margin: 20px auto 15px auto;

      height: 380px;
      width: 95%;
    }

    .section__quem {
      margin-bottom: 30px;
      padding-top: 50px;

      width: 70%;
    }

    .titulo__empresa {
      border-left: 4px solid #525252;

      font-size: 25px;

      height: 35px;
      margin-bottom: 40px;
    }

    .paragrafo__empresa {
      font-size: 18px;
      line-height: 27px;
    }

    .empresa__info {
      display: flex;
      width: 80%;
    }
  }

  @media (min-width: 1200px) {
    .hero__background {
      background: linear-gradient(
        180deg,
        #63b2bb 34.11%,
        rgba(224, 125, 37, 0.58) 100%
      );
      height: 590px;
      width: 100%;
    }

    .hero {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-around;

      margin: auto;

      height: 610px;
      width: 75%;
    }

    .section__empresa {
      background: none;
      margin-top: 30px;
      height: 510px;
      width: 560px;
    }

    iframe {
      height: 510px;

      margin: 30px 0 0 0;
      width: 640px;
    }

    .section__quem {
      margin-bottom: 30px;
      padding-top: 0px;

      width: 90%;
    }

    .titulo__empresa {
      border-left: 5px solid #525252;
      font-size: 28px;

      margin-bottom: 25px;
      padding-top: 10px;

      height: 48px;
    }

    .paragrafo__empresa {
      font-size: 18px;
      text-align: center;
    }

    .empresa__info {
      display: flex;
      margin: auto;
      width: 95%;
    }

    .circle__info {
      font-size: 24px;
      height: 160px;
      width: 160px;
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

export const ThirdSection = styled.section`
  display: flex;
  align-items: center;
  height: 500px;
  justify-content: space-around;
  width: 70vw;
  margin: auto;

  div {
    width: 650px;
    background-color: #00cfe6;
  }
  section {
    background-image: url(${backgroundThirdSection});
    height: 343px;
    width: 635px;
    border-radius: 3px;
  }

  img {
    height: 343px;
    width: 450px;
    border-radius: 3px;
  }
`;

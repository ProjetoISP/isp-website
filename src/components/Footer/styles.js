import styled from "styled-components";

export const FooterContainer = styled.div`
  background: linear-gradient(
    180deg,
    #63b2bb 34.11%,
    rgba(224, 125, 37, 0.58) 100%
  );
  height: 570px;

  h2 {
    height: 63px;
    width: 178px;
    margin: auto;
    font-family: Poppins;
    font-size: 42px;
    font-weight: 800;
    line-height: 63px;
    text-align: left;
    color: #ffffff;
    padding: 20px;
  }

  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70%;
    margin: auto;
    height: 80%;
    padding: 10px;
  }
  p {
    width: 30%;
    margin: 20px auto;
  }
`;

export const FormContainer = styled.div`
  height: 95%;
  min-width: 450px;
  width: 45%;

  p {
    height: 28px;
    width: 189px;
    font-family: Roboto;
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
    text-align: left;
    margin: 20px auto;
    color: #1e1e1e;
  }
`;

export const MapContainer = styled.div`
  height: 70%;
  min-width: 450px;
  width: 45%;
  display: flex;
  flex-direction: column;

  img {
    height: 168px;
    width: 390px;
    margin: auto;
  }

  p {
    width: 62%;
    margin: 10px auto;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    text-align: left;
    color: #1e1e1e;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 42px;
  width: 62%;
  margin: auto;

  img {
    height: 40px;
    width: 54px;
    left: 786px;
    margin: 10px;
  }
`;

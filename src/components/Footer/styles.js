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
  }

  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin: auto;
    height: 80%;
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
  }
`;

export const MapContainer = styled.div`
  height: 95%;
  min-width: 450px;
  width: 45%;
  background-color: blue;
`;

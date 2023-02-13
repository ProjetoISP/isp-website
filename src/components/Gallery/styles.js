import styled from "styled-components";

export const GalleryContainer = styled.div`
  height: 800px;
  min-height: 230px;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  align-items: center;

  h2 {
    height: 69px;
    width: 210px;
    font-family: Poppins;
    font-size: 46px;
    font-weight: 900;
    line-height: 69px;
    text-align: left;
    color: #fe6c05;
    margin: auto;
  }
  .container {
    margin: 0 auto;
    text-align: center;
    width: 70vw;
  }

  .slider {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .slide img {
    max-width: 361px;
    max-height: 541px;
    width: 100%;
    margin: 20px;
    height: 100%;
    min-height: 140px;
    padding: 10px;
  }

  .controles {
    display: flex;
    position: relative;
    justify-content: space-between;

    width: 100%;

    align-items: center;
    bottom: 50%;
  }

  button {
    display: flex;

    padding: 10px 20px;
    background-color: transparent;

    color: #fe6c05;
    border: none;
    font-weight: bold;
    cursor: pointer;
  }
`;

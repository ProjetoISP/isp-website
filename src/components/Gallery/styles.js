import styled from "styled-components";

export const GalleryContainer = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
  width: 60vw;
  margin: auto;

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
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.slider {
  display: flex;
}

.slide {
  flex: 1;
}

.slide img {
  width: 250px;
  height: 541px;
}

.controls {
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  background-color: #ddd;
  color: #333;
  border: none;
  cursor: pointer;
  outline: none;
  margin-right: 20px;
}

button:hover {
  background-color: #333;
  color: #fff;
}
.controls_left{
  display: flex;
  justify-content: space-evenly;
}
`;

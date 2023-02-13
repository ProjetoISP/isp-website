import styled from "styled-components";

export const ProjectContainer = styled.div`
  height: 700px auto;
  display: flex;
  flex-direction: column;
  width: 60vw;
  margin: auto;
  text-align: center;

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
  .carousel{
    display: flex;
    padding: 20px;
    border: 1px solid #FE6C05;

  }
  img{

      position: relative;
  width: 100%;
  height: 171px;
  object-fit: contain;

    padding: 10px;
    max-width: 511px;
    max-height: 280px;
  }
 




.doeagora{
  color: white;
  height: 25px;
  
  width: 120px;
  padding-bottom: 25px;
  cursor: pointer;
  
  background: linear-gradient(180deg, #FE904C 0%, #FF7017 100%);
  box-shadow: 0px 1.35266px 1.35266px rgba(0, 0, 0, 0.15);
  border-radius: 3.38166px;

}
.doeagora p{
  top: 10px;
}
.carousel-item h3{
  color: #fe6c05;
}


button {
  margin: 10px;
  padding: 10px 20px;
  color: black;
  font-weight: 800;
  background-color: transparent;
  border: none;
}
  
 


@media (max-width: 800px) {
  .carousel {
    flex-direction: column;
  }
  button{
    display: none;
  }
  
  }

  
.carousel-item {
    width: 100%;
  height: auto;
  }

`;

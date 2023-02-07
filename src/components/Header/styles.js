import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 80vw
  height: 104px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 10px auto;

  figure {
    display: flex;
    justify-content: center;

    img {
      height: 103px;
      width: 130px;
    }
  }

  nav {
    width: 52%;
    height: 104px;
    display: flex;
    align-items: center;
    justify-content:space-around;

    a {
      height: 25px;
      border-right: 2px solid #d9d9d9;
      padding: 5px;
      padding-right: 15px;
      color: #525252;
      font-size: 20px;
      white-space: nowrap
      
      
    }
  }

  button {
    background-color: green;
  }

  @media (max-width: 900px){
    

    figure img {
      height: 77px;
      width:98px;
    }
     nav a{
      font-size: 15px;
    }

  }
`;


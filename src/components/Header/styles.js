import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  height: 100px;

  img {
    margin-top: 5px;
    width: 113px;
    height: 90px;
  }

  nav a {
    color: white;
    font-size: 26px;
    text-transform: uppercase;
    display: block;
    margin-bottom: 10px;
    height: 40px;
  }

  @media (min-width: 800px) {
    width: 100vw;
    height: 80px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    .botaoMobile {
      display: none;
    }

    figure img {
      height: 77px;
      width: 100px;
    }

    nav {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }

    nav a {
      border-right: 2px solid #d9d9d9;
      color: #525252;
      font-size: 15px;

      margin: 0;
      padding: 0;
      padding: 0 12px 0 12px;

      height: 20px;
    }

    Button {
      left: 100px;
      &:hover {
        background: #20b1c1;
      }
    }

    .botaoMobile {
      display: none;
    }
  }

  @media (min-width: 1200px) {
    margin: 0;
    height: 104px;

    figure {
      img {
        height: 104px;
        width: 130px;
      }
    }

    /* === MENU === */
    nav a {
      font-size: 20px;
      height: 25px;
      padding: 0 15px 0 15px;
    }
  }
`;

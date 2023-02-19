import styled from "styled-components";

export const FormStyles = styled.form`
  width: 100%;
  height: 100%;

  .flex-column {
    display: flex;
    flex-direction: column;
    width: 85%;
    margin: auto;
    height: 60px;
  }

  .flex-column-label {
    display: flex;
    flex-direction: column;
    width: 85%;
    margin: auto;
    height: 100px;
  }

  label {
    width: 88%;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    text-align: left;
    margin: 5px auto;

    @media(max-width: 425px){
        font-size: 12px;
        width: 70%;
    }
  }

  input {
    height: 40px;
    width: 90%;
    margin: 0 auto;
    padding: 12px;
    padding-left: 10px;
    border-radius: 5px;
    border: none;

    @media(max-width: 425px){
        width: 70%;
        height: 25px;
    }
  }

  textarea {
    height: 80px;
    width: 90%;
    margin: 0 auto;
    padding: 40px;
    padding-left: 10px;
    border-radius: 5px;
    overflow: hidden;
    border: none;
    resize: none;

    @media(max-width: 425px){
        width: 70%;
        height: 50px;
    }
  }

  div {
    width: 100%;

    margin: auto;
    display: flex;

    p {
      margin-left: 19px;
      margin-top: 2px;
      font-size: 12px;
      color: #DC143C;

      @media(max-width: 425px){
        font-size: 11px;
      }
    }
  }

  button {
    margin: 30px auto 10px auto;
  }
`

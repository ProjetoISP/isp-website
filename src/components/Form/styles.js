import styled from "styled-components";

export const FormStyles = styled.form`
  width: 100%;
  height: 100%;

  .flex-column {
    display: flex;
    flex-direction: column;
    width: 85%;
    margin: auto;
    height: 80px;
  }
  .flex-column-label {
    display: flex;
    flex-direction: column;
    width: 85%;
    margin: auto;
    height: 150px;
  }

  label {
    height: 21px;
    width: 88%;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    text-align: left;
    margin: 5px auto;
  }

  input {
    height: 60px;
    width: 90%;
    margin: auto;
    padding: 12px;
    padding-left: 10px;
    border-radius: 5px;
    border: none;
  }

  textarea {
    height: 80px;
    width: 90%;
    margin: auto;
    padding: 40px;
    padding-left: 10px;
    border-radius: 5px;
    overflow: hidden;
    border: none;
  }

  div {
    width: 100%;

    margin: auto;
    display: flex;
  }

  button {
    margin: auto;
  }
`;

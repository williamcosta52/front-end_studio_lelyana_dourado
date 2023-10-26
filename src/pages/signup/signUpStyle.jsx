import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #5fcbff;
  box-sizing: border-box;
  overflow: hidden;
  div:nth-child(1) {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      width: 75%;
      height: 90%;
    }
  }
  div:nth-child(2) {
    height: 50%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      button {
        margin-top: 5%;
        border-radius: 10px;
        background: #8e7bff;
        box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
        width: 239px;
        height: 41px;
        border: none;
        color: #000;
        text-align: center;
        font-family: Inknut Antiqua;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
      label {
        display: flex;
        flex-direction: column;
        margin: 10px;
        color: #000;
        font-family: Inknut Antiqua;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        input {
          border-radius: 5px;
          border: none;
          background: #d9d9d9;
          box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
          width: 239px;
          height: 34px;
        }
      }
    }
  }
`;

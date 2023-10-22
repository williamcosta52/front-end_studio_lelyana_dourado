import { styled } from 'styled-components';

export const BackgroundBlur = styled.div`
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
`;
export const OptionBox = styled.div`
  width: 70%;
  height: 15%;
  display: flex;
  flex-direction: column;
  background-color: #ffadbb;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 2px solid white;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80%;
    button {
      width: 30%;
      height: 40%;
      background-color: #5fcbff;
      border: none;
      border-radius: 5px;
      margin: auto;
      color: white;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }
  }
  h1 {
    color: #000;
    font-family: Abel;
    font-size: 75%;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.5px;
  }
`;

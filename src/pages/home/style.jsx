import { ImMenu } from 'react-icons/im';
import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #d3d3d3;
  box-sizing: border-box;
  overflow: hidden;
  header {
    display: flex;
    position: fixed;
    top: 0%;
    justify-content: space-around;
    align-items: center;
    background: #ffadbb;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    height: 10%;
    img {
      width: 15%;
    }
    h1 {
      color: #000;
      text-align: center;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      font-family: Just Another Hand;
      font-size: 25px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;
export const MenuIcon = styled(ImMenu)`
  width: 8%;
  height: 70%;
`;

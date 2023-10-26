import { styled } from 'styled-components';
import { GrClose } from 'react-icons/gr';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
`;
export const WarningBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 20%;
  background-color: #ffadbb;
  border-radius: 3%;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  div:nth-child(1) {
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: end;
  }
  div:nth-child(2) {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: start;
    h1 {
      color: #000;
      font-family: Inknut Antiqua;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;
export const CloseMenuIcon = styled(GrClose)`
  width: 10%;
  height: 35%;
  margin-right: 3%;
  margin-top: 3%;
`;

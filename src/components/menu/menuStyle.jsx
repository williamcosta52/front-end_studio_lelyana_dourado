import { styled } from 'styled-components';
import { GrClose } from 'react-icons/gr';

export const BackgroundBlur = styled.div`
  display: ${(props) => (props.ChangeMenuState ? "flex" : "none")};
  background: rgba(0, 0, 0, 0.6);
  align-items: center;
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100%;
  top: 0;
`;

export const MenuDivStyle = styled.div`
  width: 15%;
  height: 100%;
`;

export const MenuContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  list-style: none;
  background: #5fcbff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 0;
  gap: 20px;
  width: 100%;
  height: 100%;
`;

export const MenuItem = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #e04db4;
  }
  color: #000;
  font-family: Inter;
  font-size: 1.2em;
  font-style: normal;
  line-height: normal;
  font-weight: 400;
`;

export const CloseMenuIcon = styled(GrClose)`
  width: 40px;
  height: 20px;
  margin-left: 13%;
  cursor: pointer;
`;

export const DivImgAndCloseModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  div {
    width: 100%
  }

  div:first-child {
    text-align: right;
  }

  div:not(first-child) {
    text-align: center;
    padding: 10px;
  }
`;

export const DivMenuOptions = styled.div`
  width: 100%
`;
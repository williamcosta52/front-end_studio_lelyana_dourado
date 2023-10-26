import { styled } from 'styled-components';
import { GrClose } from 'react-icons/gr';

export const BackgroundBlur = styled.div`
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  z-index: 1;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
`;
export const MenuDivStyle = styled.div`
  width: 50%;
  height: 100%;
`;
export const Menu = styled.ul`
  list-style: none;
  padding: 0;
  background: #5fcbff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 100%;
  li:nth-child(6),
  li:nth-child(8) {
    color: #696060;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
export const MenuItem = styled.li`
  padding: 10px;
  margin-left: 10%;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
  color: #000;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const CloseMenuIcon = styled(GrClose)`
  width: 20%;
  height: 10%;
  margin-left: 13%;
`;

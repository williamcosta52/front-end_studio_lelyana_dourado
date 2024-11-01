import { ImMenu } from 'react-icons/im';
import styled from "styled-components";

export const HeaderPage = styled.div`
    display: flex;
    position: fixed;
    align-items: center;
    background: #e04db4;
    justify-content: space-between;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    height: 10%;
    width: 100%;
    top: 0%;
    img {
    transform: scale(1);
    align-self: stretch;
    }
    h1 {
        color: #000;
        text-align: center;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        font-family: Just Another Hand;
        font-size: 40px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`

export const MenuIcon = styled(ImMenu)`
    width: 4%;
    height: 60%;
    transform: scale(.7);
    cursor: pointer;
`;
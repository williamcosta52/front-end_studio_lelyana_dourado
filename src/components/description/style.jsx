import { styled } from 'styled-components';

export const DescriptionContainer = styled.div`
  padding-top: 25%;
`;
export const FirstDescriptionDiv = styled.div`
  p {
    color: #000;
    text-align: center;
    font-family: Abel;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
export const MidDescriptionDiv = styled.div`
  display: flex;
  margin-top: 5%;
  img {
    width: 40%;
    height: 20%;
  }
  p {
    color: #000;
    font-family: Abel;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-right: 5%;
  }
`;
export const LastDescriptionDiv = styled.div`
  display: flex;
  margin-top: 5%;
  p {
    color: #000;
    font-family: Abel;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-left: 5%;
  }
  img {
    width: 40%;
    height: 20%;
  }
`;

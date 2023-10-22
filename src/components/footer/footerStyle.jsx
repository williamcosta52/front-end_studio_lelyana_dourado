import { styled } from 'styled-components';
import { RiWhatsappFill } from 'react-icons/ri';
import { SiGmail } from 'react-icons/si';
import { BiLogoInstagramAlt } from 'react-icons/bi';

export const Container = styled.div`
  justify-content: space-around;
  display: flex;
`;
export const ContactInfo = styled.div`
  overflow: hidden;
  h2 {
    font-family: Abel;
    margin-bottom: 5%;
    margin-left: 3%;
  }
  div:nth-child(3) {
    display: flex;
    p {
      color: #000;
      font-family: Abel;
      font-size: 12px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 0.5px;
      margin-left: 3%;
    }
  }
  div:nth-child(2) {
    display: flex;
    p {
      color: #000;
      font-family: Abel;
      font-size: 12px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 0.5px;
      margin-left: 2%;
    }
  }
  div:nth-child(4) {
    display: flex;
    p {
      color: #000;
      font-family: Abel;
      font-size: 12px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 0.5px;
      margin-left: 2%;
    }
  }
`;
export const GpsStyle = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  img {
    width: 80%;
    height: 80%;
  }
  h2 {
    margin-right: 22%;
    margin-bottom: 10%;
    color: #000;
    font-family: Abel;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.5px;
  }
`;
export const WhatsAppIcon = styled(RiWhatsappFill)`
  color: green;
  margin-left: 3%;
`;
export const EmailIcon = styled(SiGmail)`
  color: red;
  height: 4%;
  width: 5%;
  margin-left: 3%;
`;
export const InstagramIcon = styled(BiLogoInstagramAlt)`
  margin-left: 3%;
  background: linear-gradient(45deg, #833ab4, #fd1d1d, #fcb045);
  border-radius: 100%;
`;

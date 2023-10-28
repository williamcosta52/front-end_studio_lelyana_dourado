import {
  Container,
  ContactInfo,
  WhatsAppIcon,
  EmailIcon,
  InstagramIcon,
  GpsStyle,
} from './footerStyle';
import gps from '../../assets/gps.png';
import { useState } from 'react';
import Warning from '../warning/Warning';

export default function Footer() {
  const [warning, setWarning] = useState(false);
  return (
    <Container>
      {warning && <Warning setWarning={setWarning} />}
      <ContactInfo>
        <h2>Informações para contato:</h2>
        <div>
          <WhatsAppIcon />
          <p>(53) 9 8458-5086</p>
        </div>
        <div>
          <EmailIcon />
          <p>lelyanadourado@gmail.com</p>
        </div>
        <div>
          <InstagramIcon />
          <p>@studio_lelyanadourado</p>
        </div>
      </ContactInfo>
      <GpsStyle>
        <h2>Como chegar?</h2>
        <img src={gps} onClick={() => setWarning(true)} />
      </GpsStyle>
    </Container>
  );
}

import { Container } from './style';
import { useState } from 'react';
import Description from '../../components/description/Description';
import Footer from '../../components/footer/Footer';
import MenuOptions from '../../components/menu/MenuOptions';
import Header from '../../components/header/Header';

export default function HomePage() {
  const [ChangeMenuState, setChangeMenuState] = useState(false);

  return (
    <Container>
      <Header setChangeMenuState={setChangeMenuState} />
      <MenuOptions ChangeMenuState={ChangeMenuState} setChangeMenuState={setChangeMenuState} />
      <Description />
      <Footer />
    </Container>
  );
}

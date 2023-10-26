import { Container, MenuIcon } from './style';
import logo from '../../assets/logo.png';
import Description from '../../components/description/Description';
import Footer from '../../components/footer/Footer';
import MenuOptions from '../../components/menu/MenuOptions';
import { useState } from 'react';

export default function HomePage() {
  const [openOrCloseMenu, setOpenOrCloseMenu] = useState(false);

  return (
    <Container>
      <header>
        <MenuIcon onClick={() => setOpenOrCloseMenu(true)} />
        <h1>Studio Lelyana Dourado</h1>
        <img src={logo} />
      </header>
      {openOrCloseMenu && (
        <MenuOptions setOpenOrCloseMenu={setOpenOrCloseMenu} />
      )}
      <Description />
      <Footer />
    </Container>
  );
}

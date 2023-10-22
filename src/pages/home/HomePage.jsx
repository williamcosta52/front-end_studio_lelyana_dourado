import { Container, MenuIcon } from './style';
import logo from '../../assets/logo.png';
import Description from '../../components/description/Description';
import Footer from '../../components/footer/Footer';

export default function HomePage() {
  return (
    <Container>
      <header>
        <MenuIcon />
        <h1>Studio Lelyana Dourado</h1>
        <img src={logo} />
      </header>
      <Description />
      <Footer />
    </Container>
  );
}

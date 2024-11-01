import { Container } from './signInStyle';
import logocompleta from '../../assets/logocompleta.png';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import HomeButton from '../../constants/homebutton/HomeButton';

export default function Signin() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();
  function login(e) {
    e.preventDefault();
    const body = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
  }
  return (
    <Container>
      <div>
        <HomeButton />
        <img src={logocompleta} alt='logo' />
      </div>
      <div>
        <form onSubmit={login}>
          <label htmlFor='email'>
            Email:
            <input type='email' ref={emailRef} required />
          </label>
          <label htmlFor='password'>
            Senha:
            <input type='password' ref={passwordRef} required />
          </label>
          <h2>Não tem conta? <span onClick={() => navigate('/sign-up')}>Cadastrar</span></h2>
          <button>ENTRAR</button>
        </form>
      </div>
    </Container>
  );
}

import { Container } from './signUpStyle';
import logocompleta from '../../assets/logocompleta.png';
import { useRef, useState } from 'react';
import Error from '../../constants/error/Error';
import { useNavigate } from 'react-router-dom';
import HomeButton from '../../constants/homebutton/HomeButton';

export default function SignUp() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const name = useRef(null);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  function createAccount(e) {
    e.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setError(true);
      setMessage('As senhas devem ser iguais!');
    }
    const body = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };
  }
  return (
    <>
      <Container>
        <div>
          <HomeButton />
          <img src={logocompleta} alt='logo' />
        </div>
        <div>
          <form onSubmit={createAccount}>
            <label htmlFor='email'>
              Email:
              <input type='email' ref={emailRef} required />
            </label>
            <label htmlFor='name'>
              Nome de usuário:
              <input type='text' ref={name} required />
            </label>
            <label htmlFor='password'>
              Senha:
              <input type='password' ref={passwordRef} required />
            </label>
            <label htmlFor='confirmpassword'>
              Confirme a senha:
              <input type='password' ref={confirmPasswordRef} required />
            </label>
            <h2 onClick={() => navigate('/sign-in')}>
              Já possui conta? Fazer Login
            </h2>
            <button>REGISTRAR</button>
          </form>
        </div>
      </Container>
      {error && <Error message={message} setError={setError} />}
    </>
  );
}

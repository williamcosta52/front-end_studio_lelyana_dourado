import { BackgroundBlur, OptionBox } from './warningStyle';

export default function Warning({ setWarning }) {
  const gpsLink = 'https://maps.app.goo.gl/LGrLSMU1VF5z1Co49';
  function redirect() {
    window.location.href = gpsLink;
  }
  return (
    <BackgroundBlur>
      <OptionBox>
        <h1>Você será redirecionado, deseja sair da página?</h1>
        <div>
          <button onClick={redirect}>Continuar</button>
          <button onClick={() => setWarning(false)}>Cancelar</button>
        </div>
      </OptionBox>
    </BackgroundBlur>
  );
}

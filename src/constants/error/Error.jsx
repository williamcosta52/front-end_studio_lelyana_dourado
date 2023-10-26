import { Container, WarningBox, CloseMenuIcon } from './style';

export default function Error({ message, setError }) {
  return (
    <Container>
      <WarningBox>
        <div>
          <CloseMenuIcon onClick={() => setError(false)} />
        </div>
        <div>
          <h1>{message}</h1>
        </div>
      </WarningBox>
    </Container>
  );
}

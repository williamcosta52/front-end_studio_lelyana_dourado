import { TbHomeMove } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

export default function HomeButton() {
  const navigate = useNavigate();

  return <HomeIcon onClick={() => navigate('/home')} />;
}

const HomeIcon = styled(TbHomeMove)`
  position: fixed;
  z-index: 1;
  top: 1%;
  right: 4.5%;
  width: 10%;
  height: 5%;
`;

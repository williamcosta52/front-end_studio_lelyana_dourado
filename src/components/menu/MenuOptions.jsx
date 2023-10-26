import { useNavigate } from 'react-router-dom';
import {
  BackgroundBlur,
  MenuDivStyle,
  Menu,
  MenuItem,
  CloseMenuIcon,
} from './menuStyle';

export default function MenuOptions({ setOpenOrCloseMenu }) {
  const navigate = useNavigate();
  function setMenu() {
    setOpenOrCloseMenu(false);
  }
  return (
    <BackgroundBlur>
      <MenuDivStyle>
        <Menu>
          <CloseMenuIcon onClick={setMenu} />
          <MenuItem onClick={() => navigate('/sign-in')}>Fazer Login</MenuItem>
          <MenuItem onClick={() => navigate('/sign-up')}>Cadastre-se</MenuItem>
          <MenuItem>Calendário (horários/dias)</MenuItem>
          <MenuItem>Marcar aula experimental</MenuItem>
          <MenuItem>Dúvidas? Entre em contato</MenuItem>
          <MenuItem>Adicionais para alunos:</MenuItem>
          <MenuItem>Remarcar aula</MenuItem>
          <MenuItem>Adicionais para adm:</MenuItem>
          <MenuItem>Publicar comunicado</MenuItem>
          <MenuItem>Cancelar aulas</MenuItem>
          <MenuItem>Alterar foto de perfil</MenuItem>
        </Menu>
      </MenuDivStyle>
    </BackgroundBlur>
  );
}

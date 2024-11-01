import { useNavigate } from 'react-router-dom';
import {
  BackgroundBlur,
  MenuDivStyle,
  MenuContainer,
  MenuItem,
  CloseMenuIcon,
  DivImgAndCloseModal,
  DivMenuOptions
} from './menuStyle';
import default_image from "../../assets/default_image.jpg"

export default function MenuOptions({ ChangeMenuState, setChangeMenuState }) {
  const navigate = useNavigate();

  return (
    <BackgroundBlur ChangeMenuState={ChangeMenuState}>
      <MenuDivStyle>
        <MenuContainer>
          <DivImgAndCloseModal>
            <div>
              <CloseMenuIcon onClick={() => setChangeMenuState(false)} />
            </div>
            <div>
              <img src={default_image} alt="user-image" />
            </div>
          </DivImgAndCloseModal>
          <DivMenuOptions>
            <MenuItem onClick={() => navigate('/sign-in')}>Fazer Login</MenuItem>
            <MenuItem onClick={() => navigate('/sign-up')}>Cadastre-se</MenuItem>
            <MenuItem>Calendário (horários/dias)</MenuItem>
            <MenuItem>Marcar aula experimental</MenuItem>
            <MenuItem>Adicionais para alunos:</MenuItem>
            <MenuItem>Remarcar aula</MenuItem>
            <MenuItem>Adicionais para adm:</MenuItem>
            <MenuItem>Publicar comunicado</MenuItem>
            <MenuItem>Cancelar aulas</MenuItem>
            <MenuItem>Alterar foto de perfil</MenuItem>
            <MenuItem>Dúvidas? Entre em contato</MenuItem>
          </DivMenuOptions>
        </MenuContainer>
      </MenuDivStyle>
    </BackgroundBlur>
  );
}

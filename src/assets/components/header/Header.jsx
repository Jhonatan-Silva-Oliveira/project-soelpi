import { HeaderContainer, LimitContainer, Logo, Nav, CotainerBtnHeader } from './Header.style';

import LogoSisjim from '../../img/logos/logo-sisjim.svg'
import { Link } from 'react-router-dom';

const Header = () =>
{
  return (
    <HeaderContainer>
      <LimitContainer>
        <Logo>
          <img src={LogoSisjim} alt="Logo da Empresa Sisjim" />
        </Logo>
        <Nav>
          <Link className="nav-link" to="/">Inicio</Link>
          <a className="nav-link" href="#">Noticias</a>
          <Link className="nav-link" to="/person">Personagens</Link>
          <a className="nav-link" href="#">Mundo</a>
        </Nav>
        <CotainerBtnHeader>
          <button className='btn'>Registrar Agora</button>
        </CotainerBtnHeader>
      </LimitContainer>
    </HeaderContainer>
  )
}

export default Header
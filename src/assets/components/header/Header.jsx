import { HeaderContainer, LimitContainer, Logo, Nav, CotainerBtnHeader } from './Header.style';

import LogoSisjim from '../../img/logos/logo-sisjim.svg'

const Header = () =>
{
  return (
    <HeaderContainer>
      <LimitContainer>
        <Logo>
          <img src={LogoSisjim} alt="Logo da Empresa Sisjim" />
        </Logo>
        <Nav>
          <a className="nav-link" href="#">Inicio</a>
          <a className="nav-link" href="#">Noticias</a>
          <a className="nav-link" href="#">Personagens</a>
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
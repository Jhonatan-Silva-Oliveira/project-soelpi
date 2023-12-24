import { FooterContainer, LimitContainer, ContainerLinksSocial, ContainFooter, Logo, Nav, ContainDesc, Copy } from './Footer.style';

import logoSoelpi from "../../../assets/img/logos/logo-Soelpi.svg";
import logoSisjim from "../../../assets/img/logos/logo-sisjim.svg";

import faceIcon from "../../../assets/img/icones/facebook-icon.svg";
import twiterIcon from "../../../assets/img/icones/twiter-icon.svg";
import youtubeIcon from "../../../assets/img/icones/youtube-icon.svg";
import instaIcon from "../../../assets/img/icones/instagram-icon.svg";
import discordIcon from "../../../assets/img/icones/discord-icon.svg";

const Footer = () =>
{
  return (
    <FooterContainer>
      <ContainerLinksSocial>
        <LimitContainer>
          <a className="link" href="">
            <img className='icon-link' src={faceIcon} alt="" />
          </a>
          <a className="link" href="">
            <img className='icon-link' src={twiterIcon} alt="" />
          </a>
          <a className="link" href="">
            <img className='icon-link' src={youtubeIcon} alt="" />
          </a>
          <a className="link" href="">
            <img className='icon-link icon-insta' src={instaIcon} alt="" />
          </a>
          <a className="link" href="">
            <img className='icon-link' src={discordIcon} alt="" />
          </a>
        </LimitContainer>
      </ContainerLinksSocial>
      <LimitContainer>
        <ContainFooter>
          <Logo width={"80px"}>
            <img src={logoSoelpi} alt="Logo da Empresa Sisjim" />
          </Logo>
          <Nav>
            <a className="nav-link" href="#">Política de Privacidade</a>
            <a className="nav-link" href="#">Termos de Serviço</a>
            <a className="nav-link" href="#">Sobre Nós</a>
            <a className="nav-link" href="#">Contate-nos</a>
          </Nav>

          <ContainDesc>
            <p className='paragraph'>
              PlayStation Family Mark, &quot;PS5 logo&quot; and &quot;PS4 logo&quot; are registered trademarks or trademarks of Sony Interactive Entertainment Inc.
            </p>
            <p className='paragraph'>
              Epic, Epic Games, Epic Games Store, the Epic Games Store logo, and Epic Online Services are trademarks and/or registered trademarks of Epic Games. All other trademarks are the property of their respective owners.
            </p>
          </ContainDesc>

          <Logo width={"150px"}>
            <img src={logoSisjim} alt="Logo da Empresa Sisjim" />
          </Logo>

          <Copy>
            Copyriright© JHOW777.All Rights Reserved.
          </Copy>
        </ContainFooter>
      </LimitContainer>
    </FooterContainer>
  )
}

export default Footer
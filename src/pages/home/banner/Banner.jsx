import { BannerContainer, LimitContainer, ContainerLogo, ContainerPlatforms } from './Banner.style';

import logo from "../../../assets/img/logos/logo-Soelpi.svg";
import defaultQr from "../../../assets/img/platforms/default-qr.png";
import imgAppStore from "../../../assets/img/platforms/img-appStore.png";
import imgEpicStore from "../../../assets/img/platforms/img-epicStore.png";
import imgGooglePlay from "../../../assets/img/platforms/img-googlePlay.png";
import imgPs5 from "../../../assets/img/platforms/img-ps5.png";
import imgWindows from "../../../assets/img/platforms/img-windows.png";


const Banner = () =>
{
  return (
    <BannerContainer>
      <LimitContainer>
        <section className="banner">
          <ContainerLogo>
            <img className='logo-soelpi' src={logo} alt="logo" />
          </ContainerLogo>
          <ContainerPlatforms>
            <p className='paragraph-platporms'>Em breve nas plataformas</p>
            <div className='container-img-platforms'>
              <img className='img-platform' src={defaultQr} alt="qr" />
              <img className='img-platform' src={imgPs5} alt="Ps5" />
              <img className='img-platform' src={imgWindows} alt="Wins" />
              <img className='img-platform' src={imgAppStore} alt="AppS" />
              <img className='img-platform' src={imgGooglePlay} alt="Play" />
              <img className='img-platform' src={imgEpicStore} alt="Epic" />
            </div>
          </ContainerPlatforms>
        </section>
      </LimitContainer>
    </BannerContainer>
  )
}

export default Banner
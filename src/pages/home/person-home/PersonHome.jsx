import { PersonContainer, LimitContainer, ContainerTitle, ContainerCardsPerson } from './PersonHome.style';

import lineDetail from "../../../assets/img/detail/line-detail.png";
import Asrien from "../../../assets/img/characters/Asrien-home.png";
import Irien from "../../../assets/img/characters/Irien-home.png";
import Kareth from "../../../assets/img/characters/Kareth-home.png";

const PersonHome = () =>
{
  return (
    <PersonContainer>
      <LimitContainer>
        <ContainerTitle>
          <h2 className="title">Personagens</h2>
          <img className="title-detail" src={lineDetail} alt="" />
        </ContainerTitle>

        <ContainerCardsPerson>
          <a className="card-person" href="#">
            <div className="card-container-image">
              <img src={Irien} alt="Personagem Irien" />
            </div>
            <div className="card-container-description">
              <h2 className='card-title'>Irien</h2>
              <p className='card-desc'>Sacerdotisa da luz</p>
            </div>
          </a>

          <a className="card-person" href="#">
            <div className="card-container-image">
              <img src={Asrien} alt="Personagem Asrien" />
            </div>
            <div className="card-container-description">
              <h2 className='card-title'>Asrien</h2>
              <p className='card-desc'>Divina cavaleira prateada</p>
            </div>
          </a>

          <a className="card-person" href="#">
            <div className="card-container-image">
              <img src={Kareth} alt="Personagem Kareth" />
            </div>
            <div className="card-container-description">
              <h2 className='card-title'>Kareth</h2>
              <p className='card-desc'>Rainha maga da floresta </p>
            </div>
          </a>
        </ContainerCardsPerson>
      </LimitContainer>
    </PersonContainer>
  )
}

export default PersonHome
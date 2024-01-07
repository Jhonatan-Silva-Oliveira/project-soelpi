import { PersonContainer, LimitContainer, ContainerTitle, ContainerPersonDesc, BtnLR, BoxLeft } from './Person.style';

import lineDetail from "../../assets/img/detail/line-detail.png";
import btnsImgLeft from "../../assets/img/icones/icon-left.png"
import btnsImgRight from "../../assets/img/icones/icon-right.png"

import mineImgIrien from "../../assets/img/characters/Irien-home.png"
import mineImgAsrien from "../../assets/img/characters/Asrien-home.png"

import imgKarynny from "../../assets/img/characters/Karynh.png"

const Person = () =>
{
  return (
    <PersonContainer>
      <LimitContainer>
        <ContainerTitle>
          <h1 className="title">Personagens</h1>
          <img className="title-detail" src={lineDetail} alt="" />
        </ContainerTitle>

        <ContainerPersonDesc>
          <BtnLR>
            <img src={btnsImgLeft} alt="button left" />
          </BtnLR>
          <div className="container-box">
            <BoxLeft>
              <div className="title-box-person">
                <h2 className="title-name-person">Karynh</h2>
                <p className="subtitle-name-person">Rainha maga da floresta </p>
              </div>
              <div className="desc-box-person">
                <h3>Story</h3>
                <div className='desc-person'>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisic elit. Dolor, culpa quam iusto minima ad tenetur repudiandae architecto est unde ipsam fugit alias saepe ipsa fugiat rerum cupiditate consequatur nesciunt nisi.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, culpa quam iusto minima ad tenetur repudiandae architecto est unde ipsam fugit alias saepe ipsa fugiat rerum cupiditate consequatur nesciunt nisi.
                  </p>
                </div>
              </div>
              <div className="container-img-left">
                <div className='img-left'>
                  <img src={mineImgIrien} alt="proxima imagem personagem" />
                  <div className='desc-name-img'>
                    <p>Irien</p>
                  </div>
                </div>
                <div className='img-left'>
                  <img src={mineImgAsrien} alt="proxima imagem personagem" />
                  <div className='desc-name-img'>
                    <p>Asrien</p>
                  </div>
                </div>
              </div>
            </BoxLeft>
            <div className='container-img-princ'>
              <div className='img-princ'>
                <img src={imgKarynny} alt="imagem principal Karynny" />
              </div>
              <div className='detail'>
              </div>
            </div>
          </div>
          <BtnLR>
            <img src={btnsImgRight} alt="button right" />
          </BtnLR>
        </ContainerPersonDesc>

      </LimitContainer>
    </PersonContainer>
  )
}

export default Person
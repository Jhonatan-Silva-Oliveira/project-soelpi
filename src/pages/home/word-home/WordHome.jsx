import { WordContainer, LimitContainer, ContainWordHome, ContainerImgWord } from './WordHome.style';

import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import PropTypes from 'prop-types';

import imgFlorest from "../../../assets/img/places/floresta-home.png";
import imgCampo from "../../../assets/img/places/planice-home.png";
import imgCastelo from "../../../assets/img/places/casteloHome.png";

function Tilt(props)
{
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() =>
  {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  Tilt.propTypes = {
    options: PropTypes.object.isRequired,
  };

  return <div ref={tilt} {...rest} />;
}

const WordHome = () =>
{
  const options = {
    scale: 1.1,
    speed: 2000,
    max: 5,
    glare: true,
    "max-glare": .1,
  };

  return (
    <WordContainer>
      <LimitContainer>
        <ContainWordHome>
          <h2 className="title">Explore um mundo repleto de aventuras
            e magia</h2>
          <p className="description">Desbravando um mundo vasto, explore por florestas cheias de magia, deslumbre a vista de planícies, desvende os segredos ocultos de um mundo cheio de aventura e mistérios.</p>
          <a className="btn-more-info" href="#">Mais Informações</a>
          <div className='container-img-words'>
            <img src={imgFlorest} alt="floresta" />
            <img src={imgCampo} alt="campo" />
          </div>
        </ContainWordHome>

        <ContainerImgWord>
          <div className="box-image" >
            <Tilt options={options}>
              <img src={imgCastelo} alt="castelo" />
            </Tilt>
          </div>
        </ContainerImgWord>

      </LimitContainer>
    </WordContainer>
  )
}

export default WordHome
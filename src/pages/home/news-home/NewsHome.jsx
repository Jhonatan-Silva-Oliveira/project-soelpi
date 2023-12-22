import { NewsContainer, LimitContainer, ContainerTitle, ContainerNews, BtnMoreNews } from './NewsHome.style';

import lineDetail from "../../../assets/img/detail/line-detail.png";
import angelIMG from "../../../assets/img/update/princess-angel.png";
import btnMais from "../../../assets/img/icones/btn-mais.svg";

const NewsHome = () =>
{
  return (
    <NewsContainer>
      <LimitContainer>
        <ContainerTitle>
          <h2 className="title">Notícias</h2>
          <img className="title-detail" src={lineDetail} alt="" />
        </ContainerTitle>

        <ContainerNews>
          <div className="container-image">
            <img className='image-news' src={angelIMG} alt="" />
          </div>
          <div className="contain-news">
            <h3 className='title-list-news'>Recentes</h3>
            <ul className='list-news'>
              <li className='item-news'>[Evento com Recompensas] Teste suas habilidade <span className='data-news'>28/09/23</span></li>
              <li className='item-news'>[Evento com Recompensas] Teste suas habilidade <span className='data-news'>28/09/23</span></li>
              <li className='item-news'>[Evento com Recompensas] Teste suas habilidade <span className='data-news'>28/09/23</span></li>
              <li className='item-news'>[Evento com Recompensas] Teste suas habilidade <span className='data-news'>28/09/23</span></li>
              <li className='item-news'>[Evento com Recompensas] Teste suas habilidade <span className='data-news'>28/09/23</span></li>
            </ul>
            <BtnMoreNews>
              <button className='btn-more'>
                <img className='icon-more' src={btnMais} alt="" />
                Mais
              </button>
            </BtnMoreNews>
          </div>
        </ContainerNews>
      </LimitContainer>
    </NewsContainer>
  )
}

export default NewsHome
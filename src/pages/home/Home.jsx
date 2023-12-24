import Banner from "./banner/Banner"
import NewsHome from "./news-home/NewsHome"
import PersonHome from "./person-home/PersonHome"
import WordHome from "./word-home/WordHome"


const Home = () =>
{
  return (
    <div>
      <Banner />
      <NewsHome />
      <WordHome />
      <PersonHome />
    </div>
  )
}

export default Home
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./assets/components/footer/Footer"
import Header from "./assets/components/header/Header"
import Home from "./pages/home/Home"
import PersonPage from "./pages/person/Person"


function App()
{

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/person" element={<PersonPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

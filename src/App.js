import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import News from './components/pages/news/News'
import Footer from './components/footer/Footer.jsx'
import Chavo from './components/pages/chavo/Chavo'
import Battle from './components/pages/battle/Battle'
import Home from './components/pages/home/Home'
import DetailPage from './components/pages/news/detailPage/DetailPage'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/battle"
          element={<Battle />}
        />
        <Route
          path="/chavo"
          element={<Chavo />}
        />
        <Route
          path="/news"
          element={<News />}
        />
        <Route
          path="/news/detail-page/:id"
          element={<DetailPage />}
        />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

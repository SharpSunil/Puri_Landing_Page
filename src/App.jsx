
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './Pages/Home/Home'
import Header from './componant/Header/Header'
import Footer from './componant/Footer/Footer'
import News_details from './componant/News_Details/News_details'
import ScrollToHash from './componant/ScrollToHash'

function App() {


  return (
    <>

      <BrowserRouter>
      <ScrollToHash />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<News_details />} />
        </Routes>
        <Footer />
        </BrowserRouter>



    </>
  )
}

export default App

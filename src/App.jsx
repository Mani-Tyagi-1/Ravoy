import { Routes, Route } from "react-router-dom"
import AboutUs from './pages/about'
import ContactUs from './pages/contact'
import HomePage from './pages/home'
import Login from './pages/login'
import Shop from './pages/shop'

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />


      </Routes>

      
    </>
  )
}

export default App

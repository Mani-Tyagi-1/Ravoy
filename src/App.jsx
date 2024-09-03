import { Routes, Route } from "react-router-dom"
import AboutUs from './pages/about'
import ContactUs from './pages/contact'
import HomePage from './pages/home'
import Login from './pages/login'
import Shop from './pages/shop'
import Dashboard from './pages/dashboard/overview'
import AddressBook from './pages/dashboard/address-book'
import Wishlist from "./pages/dashboard/wishlist"

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/dashboard-overview" element={<Dashboard />} />
        <Route path="/dashboard-adressbook" element={<AddressBook />} />
        <Route path="/dashboard-wishlist" element={<Wishlist />} />


      </Routes>
    </>
  );
}

export default App

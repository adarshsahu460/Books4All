import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import LandingPage from './Pages/Landing/LandingPage'
// import Home from './Pages/Donor_Dashboard/Donor_Dashboard'
import RequestPage from './Pages/RequestPage/RequestPage'
// import Cart from './Pages/Cart/Cart'
// import Donor_Dashboard from './Pages/Donor_Dashboard/Donor_Dashboard'
import DonateForm from './Pages/Donate/DonateBook'
import CartPage from './Pages/OrderSuccess/OrderSuccesfulpopup'
import LoginComponent from './Pages/Login/Login'
import SignupComponent from './Pages/Signup/Signup'
import Booklist from './Pages/Home/Booklist'
import BookDetailPage from './Pages/Home/BookDetailPage'
import BookTrackingPage from './Pages/Home/BookTrackingPage'
import TransactionTable from './Pages/Ngo/Ngo'
import DashBoard from './components2/DashBoard'
import OrderSuccessPopup from './Pages/OrderSuccess/OrderSuccesfulpopup'
import ImpactPage from './Pages/Impact/ImpactPage'

function App() {
  return (
    <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/request" element={<RequestPage/>} />
        <Route path="/donor" element={<DashBoard/>} />
        <Route path="/donate" element={<DonateForm/>} />
        <Route path="/cart" element={<OrderSuccessPopup/>} />
        <Route path="/login" element={<LoginComponent/>} />
        <Route path="/signup" element={<SignupComponent/>} />
        <Route path="/home" element={<Booklist/>} />
        <Route path="/book-details/:id" element={<BookDetailPage/>} />
        <Route path="/book-tracking" element={<BookTrackingPage/>} />
        <Route path="/ngo-dashboard" element={<TransactionTable/>} />
        <Route path="/impact" element={<ImpactPage/>} />
        {/* <Route path="/book-details/vivek" element={<Booklist/>} /> */}
    </Routes>
  )
}

export default App

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
// import LandingPage from './Pages/Landing/LandingPage.jsx'
// import RequestPage from './Pages/RequestPage/RequestPage.jsx'
// import Donor_Dashboard from './Pages/Donor_Dashboard/Donor_Dashboard.jsx'
// import CartPage from './Pages/Cart/Cart.jsx'
// import SignupComponent from './Pages/Signup/Signup.jsx'
// import LoginComponent from './Pages/Login/Login.jsx'
// import DonateForm from './Pages/Donate/DonateBook.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
)

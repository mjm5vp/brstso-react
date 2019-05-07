import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home/Home'
import CompanyInfo from './pages/CompanyInfo/CompanyInfo'
import ContactUs from './pages/ContactUs'
import Jobs from './pages/Jobs'
import Footer from './components/Footer/Footer'

function AppRouter() {
  return (
    <Router>
      <NavBar />
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/company-info/" component={CompanyInfo} />
        <Route path="/contact-us/" component={ContactUs} />
        <Route path="/jobs/" component={Jobs} />
      </div>
      <Footer />
    </Router>
  )
}

export default AppRouter

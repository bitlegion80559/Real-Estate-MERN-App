import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import CreateListing from './pages/CreateListing';
import About from './pages/About'
import Header from './components/Header'
import ContactUs from './pages/ContactUs'
import PrivateRoute from './components/PrivateRoute';
import UpdateListing from './pages/UpdateListing';
import Listing from './pages/Listing'
import Search from './pages/Search'
const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
        <Route path='/listing/:listingId' element={<Listing/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/create-listing' element={<CreateListing />} />
          <Route
            path='/update-listing/:listingId'
            element={<UpdateListing />}
          />
        </Route>
      </Routes>
    </Router>
  )
}

export default App

import React, { Fragment } from 'react';
import Header from './Header'
import Footer from './Footer'
import { BrowserRouter, Route, Link } from "react-router-dom"
import Home from './Home'
import Contact from './Contact'
import Hotel from './Hotel'
import Booking from './Booking'

const App = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path='/' component={Home} />
            <Route path='/contact' component={Contact} />
            <Route path='/booking/:hotelid' component={Booking} />
            <Route path='/hotel/:hotelid' component={Hotel} />
            <Footer/>
        </BrowserRouter>
            
    )
}

export default App
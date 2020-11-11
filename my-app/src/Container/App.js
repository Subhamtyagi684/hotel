import React, { Fragment } from 'react';
import Header from './Header'
import Footer from './Footer'
import { BrowserRouter, Route, Link } from "react-router-dom"
import Home from './Home'
import Contact from './Contact'

const App = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path='/' component={Home} />
            <Route exact path='/contact' component={Contact} />
            <Footer/>
        </BrowserRouter>
            
    )
}

export default App
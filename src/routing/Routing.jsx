import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from '../layout/Header'
import Category from '../category/Category'
import Product from '../products/Product'
import Details from '../details/Details'
import Home from '../add/Home'


function Routing() {
  return (
    <div>
        <Router>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Category/>}/>
                <Route path='/:myid' element={<Product/>}/>
                <Route path='/:myid/:details' element={<Details/>}/>
                <Route path="/Add-home" element={<Home/>}/>
            </Routes>
        </Router>
    </div>
  )
}

export default Routing
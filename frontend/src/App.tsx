import logo from './logo.svg';
import React from 'react';
import "bootswatch/dist/minty/bootstrap.min.css";
import './App.less';
import {Footer} from './components/footer/Footer';
import Nav from './components/nav/Nav';
import Login from './components/pagemodel/login-registration/Login'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './components/pagemodel/index/Index';
import Register from './components/pagemodel/login-registration/Register';
import NoMatch from './components/pagemodel/NoMatch';
import ProductDetail from './components/detail/ProductDetail'
import Discount from './components/pagemodel/deals/Discount'
class App extends React.Component {


  render() {
    return (
      <div className="App">

        <BrowserRouter>
        <Nav />

          <Routes>
          
            <Route path="/" element={<Nav />} />
            <Route index element={<Index />} />
            <Route path='register/*' element={<Register />} />
            <Route path='login/*' element={<Login />} />
            <Route path='product/detail/:id' element={<ProductDetail/>}/>
            <Route path='deals/*' element={<Discount />} />


            <Route path="*" element={<NoMatch />} />

          </Routes>
          <Footer />

        </BrowserRouter>

      </div>
    );
  }
}

export default App;

import logo from './logo.svg';
import React from 'react';
import "bootswatch/dist/minty/bootstrap.min.css";
import './App.less';
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';
import Header from './components/nav/Header';
import Carousel from './components/carousel/Carousel';
import SideMenu from './components/sideMenu/SideMenu';
import { Row, Col, Typography } from "antd";
import Login from './components/pagemodel/login-registration/Login'
import IndexPagination from './components/pagemodel/index/IndexPagination';
import sideImage from './assets/images/guodongcheng.jpg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './components/pagemodel/index/Index';
import Register from './components/pagemodel/login-registration/Register';
import NoMatch from './components/pagemodel/NoMatch';
import ProductDetail from './components/detail/ProductDetail'
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
            <Route path="*" element={<NoMatch />} />

          </Routes>
          <Footer />

        </BrowserRouter>

      </div>
    );
  }
}

export default App;

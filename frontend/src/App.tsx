import logo from './logo.svg';
import React from 'react';
import "bootswatch/dist/minty/bootstrap.min.css";
import './App.module.less';
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';
import Header from './components/nav/Header';
import Carousel from './components/carousel/Carousel';
import SideMenu from './components/sideMenu/SideMenu';
import { Row, Col,Typography } from "antd";
import { productList1, productList2, productList3 } from "./mockups";

import IndexPagination from './components/pagemodel/IndexPagination';
import sideImage from './assets/images/guodongcheng.jpg'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Footer from './components/footer/Footer';
// import Index from './components/main/Index'
// import Login from './components/main/Login';
class App extends React.Component {


  render() {
    return (
      <div className="App">

        {/* <Router>*/}

        <Nav username={"lcy"} />
        <Header />
        <div className="page-content">
          <Row style={{ marginTop: 20}}>
            <Col span={6} >
              <SideMenu />
            </Col>
            <Col span={18}>
              <Carousel />
            </Col>
          </Row>
        </div>
      
        <IndexPagination itemsPage={8} />
        {/* <Switch>
          <Route exact path="/" component={Index}></Route>
          <Route exact path="/product/list" component={Index}></Route>
         
        </Switch>*/}
        <Footer />

        {/* </Router>  */}

      </div>
    );
  }
}

export default App;

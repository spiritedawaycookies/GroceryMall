import logo from './logo.svg';
import React from 'react';
import "bootswatch/dist/minty/bootstrap.min.css";
import './App.module.less';
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';
import Header from './components/nav/Header';
import Carousel from './components/carousel/Carousel';
import IndexPagination from './components/pagemodel/IndexPagination';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Footer from './components/footer/Footer';
// import Index from './components/main/Index'
// import Login from './components/main/Login';
class App extends React.Component {
 

  render() {
    return (
      <div className="App">

        {/* <Router>*/}

        <Nav username={"lcy"}/>
        <Header />
        <Carousel />
        <IndexPagination itemsPage={8}/>
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

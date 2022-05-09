import logo from './logo.svg';
import React from 'react';
import "bootswatch/dist/minty/bootstrap.min.css";
import styles from './App.module.css';
import Nav from './components/nav/Nav';
import Header from './components/nav/Header';
import Carousel from './components/carousel/Carousel';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Footer from './components/footer/Footer';
// import Index from './components/main/Index'
// import Login from './components/main/Login';
class App extends React.Component {
 

  render() {
    return (
      <div className="App">

        {/* <Router>*/}

        <Nav />
        <Header />
        <Carousel />
        {/* <Switch>
          <Route exact path="/" component={Index}></Route>
          <Route exact path="/product/list" component={Index}></Route>
         
        </Switch>
        <Footer />

      </Router> */}

      </div>
    );
  }
}

export default App;

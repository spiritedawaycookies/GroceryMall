import logo from './logo.svg';
import "bootswatch/dist/minty/bootstrap.min.css";
import './App.css';
import Nav from './components/nav/Nav';
import Header from './components/nav/Header';
import Carousel from './components/carousel/Carousel';
import './styles.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Index from './components/main/Index'
import Login from './components/main/Login';
function App() {
  return (
    <div className="App">

      <Router>

        <Nav />
        

        <Switch>
          <Route exact path="/" component={Index}></Route>
          <Route exact path="/product/list" component={Index}></Route>
         
        </Switch>
        <Footer />

      </Router>

    </div>
  );
}

export default App;

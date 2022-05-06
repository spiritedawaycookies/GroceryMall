import logo from './logo.svg';
import "bootswatch/dist/minty/bootstrap.min.css";
import './App.css';
import Nav from './components/nav/Nav';
import Header from './components/nav/Header';
import Carousel from './components/carousel/Carousel';
import Main from './components/Main';
import './styles.css';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Carousel />
      <Main />
      <Footer/>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import "bootswatch/dist/minty/bootstrap.min.css";
import './App.css';
import Nav from './components/nav/Nav';
import Header from './components/nav/Header';
import Carousel from './components/carousel/Carousel';
import './styles.css';
import Footer from './components/footer/Footer';
import IndexPageModel from './components/pagemodel/IndexPageModel';
function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Carousel />
      {/* <Main /> */}
      
      <IndexPageModel/>
      <Footer/>
     
    </div>
  );
}

export default App;

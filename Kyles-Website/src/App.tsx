import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './components/projects/projects'
import PillsHeader from './components/header/PillsHeader';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';

function App() {

  return (
    <>
    <PillsHeader/>
    <Home/>
    <Projects/>
    <About/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App

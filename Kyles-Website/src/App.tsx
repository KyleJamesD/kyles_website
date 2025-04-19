import './App.css'
import Home from './components/home/Home'
import About from './components/about/About'
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './components/projects/projects'
import PillsHeader from './components/header/PillsHeader';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import Projects2 from './components/projects2/projects2';
import Projects3 from './components/projects3/projects3';


function App() {

  return (
    <>
    <PillsHeader/>
    <Home/>
    <Projects2/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
    <Projects3/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App

import './App.css'
import Home from './components/home/Home'
import About from './components/about/About'
import 'bootstrap/dist/css/bootstrap.min.css';
import PillsHeader from './components/header/PillsHeader';
import Contact from './components/contact/Contact';
import Projects2 from './components/projects2/projects2';

function App() {

  return (
    <>
    <PillsHeader/>
    <Home/>
    <Projects2/>
    <About/>
    <Contact/>
    </>
  )
}

export default App

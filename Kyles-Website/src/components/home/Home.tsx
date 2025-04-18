import styles from './Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from "react-bootstrap";
import kyle_studying from '../../assets/kyle_studying.png';

export default function Home () {
  return (
    <div id="home">
      <div className="container" style={{ marginTop: '7%'}} >
        <div className="row">
            {/* {Dont need template literal strings if using global styles or boot strap.} */}
          <div className="col d-flex flex-column align-items-center">
            <Image 
              src={kyle_studying} 
              roundedCircle 
              fluid 
              style={{ width: '325px', height: 'auto' }}
            />
            <h1 className={`${styles.herotitle}`}>👋Hello World! I'm Kyle.</h1>
            <h3 className={`${styles.herosubtitle}`}>A Software Developer</h3>
            <p className={`${styles.herotext}`}>
              I love coding and using technology to solve real-world problems. My passion is turning ideas into powerful, impactful products that make life easier and more enjoyable for everyone.
            </p>
            <p className={`${styles.herotext}`}>
              With every project, I'm driven by curiosity, creativity, and a desire to make the world a little bit better—one line of code at a time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
  // style="border: 2px solid orange;"
}
import styles from './About.module.css';
import homesweethome from '../../assets/home_sweet_home.png'
import springboot from '../../assets/springboot.png'
import kyle_golf from '../../assets/kyle_golf.png'
import kyle_gaming from '../../assets/kyle_gaming.png'
import pickleball_kyle from '../../assets/pickleball_kyle.png'
import { useInView } from 'react-intersection-observer';

const About = () => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2, // triggers when 20% appears in viewport
      });
    return (
        <div id="about" className={`${styles.about}`}>
            <div className='container'>
            <div className='row' style={{marginBottom: '60px'}}>
                <div className='d-flex flex-column align-items-center'>
                <p className={styles.gradientheading}>About Me</p>
                <h1 className={styles.herotitle}>Get to know me better!</h1>
                <h5 className={styles.herotext}>Learn about who I am, what I'm up to, and why I do it.</h5>
                </div>
            </div>

            <div className="row row-cols-1 row-cols-md-2 g-4">

            <div ref={ref} className={`col-md-7 ${styles.stackedCard} ${inView ? styles.visible : ''} `} >
                <div className={`card rounded-4 h-100 ${styles.cardshadow}`}>
                <div className="card-body">
                    <h2 className={`${styles.cardtitle}`}>My Technologies 🧮</h2>
                    <p className="card-text">HTML, CSS, JAVASCIPT, TYPESCRIPT, REACT, JAVA, ORACLE SQL, POSTGRESQL, DOCKER,
                         BOOTSTRAP, GITHUB, FIREBASE, LINUX, TAILWIND </p>
                </div>
                <div className={styles.carouselouter} style={{ overflow: "hidden", width: "100%" }}>
                    <div className={styles.carouselinner}>
                        <img src={'assets/tech1.png'} alt="tech1" className={styles.carouselimg}/>
                        <img src={'assets/tech2.png'} alt="tech2" className={styles.carouselimg}/>
                        <img src={'assets/tech3.png'} alt="tech3" className={styles.carouselimg}/>
                        <img src={'assets/tech4.png'} alt="tech1" className={styles.carouselimg}/>
                        <img src={'assets/tech5.png'} alt="tech2" className={styles.carouselimg}/>
                        <img src={'assets/tech6.png'} alt="tech3" className={styles.carouselimg}/>
                        <img src={'assets/tech7.png'} alt="tech3" className={styles.carouselimg}/>
                        <img src={'assets/tech8.png'} alt="tech3" className={styles.carouselimg}/>
                        <img src={'assets/tech9.png'} alt="tech3" className={styles.carouselimg}/>
                        <img src={'assets/tech10.png'} alt="tech3" className={styles.carouselimg}/>
                        <img src={'assets/tech11.png'} alt="tech3" className={styles.carouselimg}/>
                        <img src={'assets/tech12.png'} alt="tech3" className={styles.carouselimg}/>
                        <img src={'assets/tech13.png'} alt="tech3" className={styles.carouselimg}/>
                        {/* Repeat as needed. Try duplicating the images for seamless loop */}
                        <img src={'assets/tech1.png'} alt="tech1" className={styles.carouselimg}/>
                        <img src={'assets/tech2.png'} alt="tech2" className={styles.carouselimg}/>
                        <img src={'assets/tech3.png'} alt="tech3" className={styles.carouselimg}/>
                        <img src={'assets/tech4.png'} alt="tech1" className={styles.carouselimg}/>
                        <img src={'assets/tech5.png'} alt="tech2" className={styles.carouselimg}/>
                        <img src={'assets/tech6.png'} alt="tech3" className={styles.carouselimg}/>
                        <img src={'assets/tech7.png'} alt="tech3" className={styles.carouselimg}/>
                        <img src={'assets/tech8.png'} alt="tech3" className={styles.carouselimg}/>
                        <img src={'assets/tech9.png'} alt="tech3" className={styles.carouselimg}/>
                        <img src={'assets/tech10.png'} alt="tech3" className={styles.carouselimg}/>
                        <img src={'assets/tech11.png'} alt="tech3" className={styles.carouselimg}/>
                        <img src={'assets/tech12.png'} alt="tech3" className={styles.carouselimg}/>
                        <img src={'assets/tech13.png'} alt="tech3" className={styles.carouselimg}/>
                    </div>
                    </div>
                </div>
                </div>

                <div ref={ref} className={`col-md-5 mt-4 mt-md-0  ${styles.stackedCard} ${inView ? styles.visible : ''} `} >
                <div className={`card rounded-4 h-100 ${styles.cardshadow}`}>
                <div className="card-body">
                <h2 className={`${styles.cardtitle}`}>What I'm Learning 📖</h2>
                    <p className="card-text">I'm currently trying to master...</p>
                    <img src={springboot}  className=" " alt="..." style={{width: '50%'}}/>
                </div>
                
                </div>
                </div>

                <div ref={ref} style={{marginTop: '30px'}} className={`col-md-6 ${styles.stackedCard} ${inView ? styles.visible : ''} `} >
                <div className={`card rounded-4 h-100 ${styles.cardshadow}`}>
                <div className="card-body">
                <h2 className={`${styles.cardtitle}`} >What I Do 🏅</h2>
                    <p className="card-text">In my spare time I love reading books, playing sports such as golf or pickleball and the occasional game nights with friends.</p>
                    <div className='row d-flex justify-content-between'>
                    <img src={kyle_golf} className="card-img-bottom rounded-4" alt="..." style={{width: '32%'}}/>
                    <img src={kyle_gaming} className="card-img-bottom rounded-4" alt="..." style={{width: '32%'}}/>
                    <img src={pickleball_kyle} className="card-img-bottom rounded-4" alt="..." style={{width: '32%'}}/>
                    </div>
                </div>
                </div>
                </div>

                <div ref={ref} style={{marginTop: '30px'}} className={`col-md-6 ${styles.stackedCard} ${inView ? styles.visible : ''} `} >
                <div className={`card rounded-4 h-100 ${styles.cardshadow}`}>
                <div className="row g-0">
                            {/* { col-md-5 takes up 5 of the 12 horizontal spaces of a container} */}
                            <div className="col-md-5">
                            <div className="card-body">
                            <h2 className={styles.cardtitle}>My Location 📍</h2>
                            <hr></hr>
                                <p className="card-text">Born and raised in Calgary, Alberta, my family has been in Calgary since the 1950s. Prior to that, 
                                    my great-grandparents immigrated from Munich, Germany, to Saskatchewan in the early 1900s to become Canadian farmers. 🍁</p>
                            </div>
                            </div>
                            <div className="col-md-7 rounded-4">
                            <img src={homesweethome} className="card-img-bottom rounded-4" alt="..."/>
                            </div>
                        </div>
                </div>
                </div>


            </div>
            





            </div>
        </div>
    );
}

export default About;
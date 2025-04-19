import styles from './projects2.module.css';
import { Carousel } from 'react-bootstrap';

const Projects2 = () => {

    return (
            <div id="projects" className='container' style={{marginTop: '20%'}}>
                <p className={styles.gradientheading} >REAL WORLD SOLUTIONS</p>
                <h1 className={styles.herotitle}> Personal Projects </h1>
                <h5 className={styles.herotext}>Building one step at a time.</h5>
                

                <div className='row justify-content-md-center row-cols-1'>
                    {/* {CARD 1} */}
                    <div className={`card mb-3 rounded-4 ${styles.stickyStackCard}`} style={{maxWidth:'1040px', top: '50px'}}>
                        <div className="row g-0">                       
                            <div className="col-md-5">
                            <div className="card-body">
                            <p className={styles.cardgradientheadingright}>Inventory Management System - 2025</p>
                            <h1 className={styles.cardherotitle}>Orbit IMS System 🗂️</h1>
                            <hr></hr>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div style={{ alignSelf:'flex-start', width: '100%' }}>
                                <a href="https://github.com/"
                                className={styles.githubbutton}
                                >GitHub 
                                <span style={{fontSize: '1em'}}>↗
                                </span></a>
                            </div>
                            </div>
                            <div className="col-md-7">
                            <Carousel fade interval={3000} indicators={false}> {/* 3s per slide */}
                                <Carousel.Item>
                                <img src='src/assets/orbit1.png' className="d-block w-200 img-fluid rounded-start" alt="..." />
                                </Carousel.Item>
                                <Carousel.Item>
                                <img src='src/assets/orbit2.png' className="d-block w-200 img-fluid rounded-start" alt="..." />
                                </Carousel.Item>
                                <Carousel.Item>
                                <img src='src/assets/orbit3.png' className="d-block w-200 img-fluid rounded-start" alt="..." />
                                </Carousel.Item>
                                <Carousel.Item>
                                <img src='src/assets/orbit4.png' className="d-block w-200 img-fluid rounded-start" alt="..." />
                                </Carousel.Item>
                                <Carousel.Item>
                                <img src='src/assets/orbit5.png' className="d-block w-200 img-fluid rounded-start" alt="..." />
                                </Carousel.Item>
                                <Carousel.Item>
                                <img src='src/assets/orbit6.png' className="d-block w-200 img-fluid rounded-start" alt="..." />
                                </Carousel.Item>
                            </Carousel>
                            </div>
                        </div>
                    </div>
                    {/* {CARD 2} */}
                <div className={`card mb-3 rounded-4 ${styles.stickyStackCard}`} style={{maxWidth:'1040px' , top: '90px'}}>
                    <div className="row g-0">                       
                        <div className="col-md-5">
                        <div className="card-body">
                        <p className={styles.cardgradientheadingleft}>Movie Search Engine - 2024</p>
                        <h1 className={styles.cardherotitle}>Super Movie Finder 📽️</h1>
                        <hr></hr>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div style={{ alignSelf:'flex-start', width: '100%' }}>
                            <a href="https://github.com/"
                            className={styles.githubbutton}
                            >GitHub 
                            <span style={{fontSize: '1em'}}>↗
                            </span></a>
                        </div>
                        </div>
                        <div className="col-md-7">
                        <Carousel fade interval={3000} indicators={false}> {/* 3s per slide */}
                            <Carousel.Item>
                            <img src='src/assets/supermovie1.png' className="d-block w-200 img-fluid rounded-start" alt="..." />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img src='src/assets/supermovie2.png' className="d-block w-200 img-fluid rounded-start" alt="..." />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img src='src/assets/supermovie3.png' className="d-block w-200 img-fluid rounded-start" alt="..." />
                            </Carousel.Item>
                        </Carousel>
                        </div>
                    </div>
                </div>
                {/* {CARD 3} */}
                <div className={`card mb-3 rounded-4 ${styles.stickyStackCard}`} style={{maxWidth:'1040px', top: '130px'}}>
                    <div className="row g-0">                       
                        <div className="col-md-5">
                        <div className="card-body">
                        <p className={styles.cardgradientheadingright}>Jupyter Notebooks & Python Pandas - 2025</p>
                        <h1 className={styles.cardherotitle}>Data Analysis 📈</h1>
                        <hr></hr>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div style={{ alignSelf:'flex-start', width: '100%' }}>
                            <a href="https://github.com/"
                            className={styles.githubbutton}
                            >GitHub 
                            <span style={{fontSize: '1em'}}>↗
                            </span></a>
                        </div>
                        </div>
                        <div className="col-md-7">
                        <Carousel fade interval={3000} indicators={false}> {/* 3s per slide */}
                            <Carousel.Item>
                            <img src='src/assets/pandas1.png' className="d-block w-200 img-fluid rounded-start" alt="..." />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img src='src/assets/pandas2.png' className="d-block w-200 img-fluid rounded-start" alt="..." />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img src='src/assets/pandas2.png' className="d-block w-200 img-fluid rounded-start" alt="..." />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img src='src/assets/pandas4.png' className="d-block w-200 img-fluid rounded-start" alt="..." />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img src='src/assets/pandas5.png' className="d-block w-200 img-fluid rounded-start" alt="..." />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img src='src/assets/pandas6.png' className="d-block w-200 img-fluid rounded-start" alt="..." />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img src='src/assets/pandas7.png' className="d-block w-200 img-fluid rounded-start" alt="..." />
                            </Carousel.Item>
                        </Carousel>
                        </div>
                    </div>
                </div>
                {/* {CARD 4} */}
                <div className={`card mb-3 rounded-4 ${styles.stickyStackCard}`} style={{maxWidth:'1040px'  , top: '170px'}}>
                    <div className="row g-0">                       
                        <div className="col-md-5">
                        <div className="card-body">
                        <p className={styles.cardgradientheadingleft}>Restaurant Management App - 2024</p>
                        <h1 className={styles.cardherotitle}>4 Guys Restaurant 🍔</h1>
                        <hr></hr>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div style={{ alignSelf:'flex-start', width: '100%' }}>
                            <a href="https://github.com/"
                            className={styles.githubbutton}
                            >GitHub 
                            <span style={{fontSize: '1em'}}>↗
                            </span></a>
                        </div>
                        </div>
                        <div className="col-md-7">
                        <Carousel fade interval={3000} indicators={false}> {/* 3s per slide */}
                            <Carousel.Item>
                            <img src='src/assets/4guys1.png' className="d-block w-200 img-fluid rounded-start" alt="..." />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img src='src/assets/4guys2.png' className="d-block w-200 img-fluid rounded-start" alt="..." />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img src='src/assets/4guys3.png' className="d-block w-200 img-fluid rounded-start" alt="..." />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img src='src/assets/4guys4.png' className="d-block w-200 img-fluid rounded-start" alt="..." />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img src='src/assets/4guys5.png' className="d-block w-200 img-fluid rounded-start" alt="..." />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img src='src/assets/4guys6.png' className="d-block w-200 img-fluid rounded-start" alt="..." />
                            </Carousel.Item>
                        </Carousel>
                        </div>
                    </div>
                </div>
                {/* {CARD 5} */}
                <div className={`card mb-3 rounded-4 ${styles.stickyStackCard}`} style={{maxWidth:'1040px'  , top: '210px'}}>
                    <div className="row g-0">                       
                        <div className="col-md-5">
                        <div className="card-body">
                        <p className={styles.cardgradientheadingright}>Music Player App - 2024</p>
                        <h1 className={styles.cardherotitle}>Ola Sound 🎵</h1>
                        <hr></hr>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div>
                            <a href="https://github.com/"
                            className={styles.githubbutton}
                            >GitHub 
                            <span style={{fontSize: '1em'}}>↗
                            </span></a>
                        </div>
                        </div>
                            <div className="col-md-7" >
                                <div  style={{marginLeft: '28%' }}>
                                <Carousel fade interval={3000} indicators={false}> {/* 3s per slide */}
                                    <Carousel.Item>
                                    <img src='src/assets/olasound1.png' style={{ height: "500px" }} className="d-block img-fluid rounded-start" alt="..." />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                    <img src='src/assets/olasound2.png' style={{ height: "500px" }} className="d-block img-fluid rounded-start" alt="..." />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                    <img src='src/assets/olasound3.png' style={{ height: "500px" }} className="d-block img-fluid rounded-start" alt="..." />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                    <img src='src/assets/olasound4.png' style={{ height: "500px" }} className="d-block img-fluid rounded-start" alt="..." />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                    <img src='src/assets/olasound5.png' style={{ height: "500px" }} className="d-block img-fluid rounded-start" alt="..." />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                    <img src='src/assets/olasound6.png' style={{ height: "500px" }} className="d-block img-fluid rounded-start" alt="..." />
                                    </Carousel.Item>
                                </Carousel>
                                </div>
                            </div>
                    </div>
                </div>


                </div>
            </div>


    ); 
}

export default Projects2;
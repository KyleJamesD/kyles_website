import styles from './projects2.module.css';
import { Carousel } from 'react-bootstrap';

const Projects2 = () => {

    return (
            <div id="projects2" className='container' style={{marginTop: '20%'}}>
                <p className={styles.gradientheading} >REAL WORLD SOLUTIONS</p>
                <h1 className={styles.herotitle}> Personal Projects </h1>
                <h5 className={styles.herotext}>Building one step at a time.</h5>
                
                <div className={`row justify-content-md-center row-cols-1 g-4 ${styles.cardpadding} `}>
                    {/* {CARD 1} */}
                    <div className={`card mb-3 rounded-4 ${styles.stickyStackCard} ${styles.sidespacer} ${styles.nopaddingtop} `}>
                        <div className="row g-0">
                            {/* { col-md-5 takes up 5 of the 12 horizontal spaces of a container} */}
                            <div className="col-md-5">
                            <div className="card-body">
                            <p className={`${styles.cardgradientheadingright}`}>Inventory Management System - 2025</p>
                            <h1 className={`${styles.cardherotitle}`}>Orbit IMS System 🗂️</h1>
                            <hr className={styles.bigscreenhr}></hr>
                                <p className={`card-text mb-0 ${styles.cardtext} `}>Created an inventory management system for Wing Kei Care Centre. The system includes inventory tracking, approvals,
                                     and reports based on user’s access levels. This was my capstone project for SAIT’s Software Development program.</p>
                                <small className="text-body-secondary mb-0">React + Typescript + Firebase Authentication + Firestore</small>
                            </div>
                            <div style={{ alignSelf:'flex-start', width: '100%' }}>
                                <a href="https://github.com/KyleJamesD/orbit-ims"
                                className={styles.githubbutton}
                                target="_blank"
                                rel="noopener noreferrer"
                                >GitHub 
                                <span style={{fontSize: '1em'}}>↗
                                </span></a>
                            </div>
                            </div>
                            <div className="col-md-7">
                            <Carousel fade interval={3000} indicators={false}> {/* 3s per slide */}
                                <Carousel.Item>
                                <img src='assets/orbit1.png' className="d-block w-200 img-fluid rounded-start" alt="..." />
                                </Carousel.Item>
                                <Carousel.Item>
                                <img src='assets/orbit2.png' className="d-block w-200 img-fluid rounded-start" alt="..." />
                                </Carousel.Item>
                                <Carousel.Item>
                                <img src='assets/orbit3.png' className="d-block w-200 img-fluid rounded-start" alt="..." />
                                </Carousel.Item>
                                <Carousel.Item>
                                <img src='assets/orbit4.png' className="d-block w-200 img-fluid rounded-start" alt="..." />
                                </Carousel.Item>
                                <Carousel.Item>
                                <img src='assets/orbit5.png' className="d-block w-200 img-fluid rounded-start" alt="..." />
                                </Carousel.Item>
                                <Carousel.Item>
                                <img src='assets/orbit6.png' className="d-block w-200 img-fluid rounded-start" alt="..." />
                                </Carousel.Item>
                            </Carousel>
                            </div>
                        </div>
                    </div>
                    {/* {CARD 2} */}
                <div className={`card mb-3 rounded-4 ${styles.stickyStackCard} ${styles.sidespacer} ${styles.card2top} ${styles.nopaddingtop}`}>
                    <div className="row g-0">                       
                        <div className="col-md-5">
                        <div className="card-body">
                        <p className={styles.cardgradientheadingleft}>Movie Search Engine - 2024</p>
                        <h1 className={styles.cardherotitle}>Super Movie Finder 📽️</h1>
                        <hr className={styles.bigscreenhr}></hr>
                            <p className={`card-text mb-0 ${styles.cardtext} `}>A streamlined movie search engine that lets you find movies by title and save your favorites to a personalized list. 
                                Sign in easily with your Google or GitHub account to access and manage your saved movies. The app leverages Firebase for secure user authentication and data storage. </p>
                            <small className="text-body-secondary mt-0">React + Javascript + Firebase Authentication + The Movie Database API<br/><a target="_blank" rel="noopener noreferrer" href='https://super-movie-finder.vercel.app/'>https://super-movie-finder.vercel.app/</a></small>
                        </div>
                        <div style={{ alignSelf:'flex-start', width: '100%' }}>
                            <a href="https://github.com/KyleJamesD/SuperMovieFinder"
                            className={styles.githubbutton}
                            target="_blank"
                            rel="noopener noreferrer"
                            >GitHub 
                            <span style={{fontSize: '1em'}}>↗
                            </span></a>
                        </div>
                        </div>
                        <div className="col-md-7">
                            
                        <Carousel fade interval={3000} indicators={false}> {/* 3s per slide */}
                            <Carousel.Item>
                            <img src='assets/supermovie1.png' className="d-block w-200 img-fluid rounded-start" alt="..." />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img src='assets/supermovie2.png' className="d-block w-200 img-fluid rounded-start" alt="..." />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img src='assets/supermovie3.png' className="d-block w-200 img-fluid rounded-start" alt="..." />
                            </Carousel.Item>
                        </Carousel>
                        </div>
                    </div>
                </div>
                {/* {CARD 3} */}
                <div className={`card mb-4 rounded-4 ${styles.stickyStackCard} ${styles.sidespacer} ${styles.card3top} ${styles.nopaddingtop}`}>
                    <div className="row g-0">                       
                        <div className="col-md-5">
                        <div className="card-body">
                        <p className={styles.cardgradientheadingright}>Data Analysis - 2025</p>
                        <h1 className={styles.cardherotitle}>Product Trends 📈</h1>
                        <hr className={styles.bigscreenhr}></hr>
                            <p className={`card-text mb-0 ${styles.cardtext} `}>This is a basic data analysis project built using Jupyter Notebooks, Matplotlib, and Python Pandas. It explores key analytics such as identifying which products sold the most in various cities and at what times. The project demonstrates fundamental data exploration and visualization techniques.</p>
                            <small className="text-body-secondary mb-0">Jupyter Notebooks + Python Pandas + Matplotlib</small>
                        </div>
                        <div style={{ alignSelf:'flex-start', width: '100%' }}>
                            <a href="https://github.com/KyleJamesD/Basic_Data_Analysis/blob/main/data_analysis_practice.ipynb"
                            className={styles.githubbutton}
                            target="_blank"
                            rel="noopener noreferrer"
                            >GitHub 
                            <span style={{fontSize: '1em'}}>↗
                            </span></a>
                        </div>
                        </div>
                        <div className="col-md-7">
                        <Carousel fade interval={3000} indicators={false}> {/* 3s per slide */}
                            <Carousel.Item>
                            <img src='assets/pandas1.png' className={`d-block img-fluid rounded-start ${styles.smlscreenimgsize}`} alt="..." />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img src='assets/pandas2.png' className={`d-block img-fluid rounded-start ${styles.smlscreenimgsize}`} alt="..." />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img src='assets/pandas2.png' className={`d-block img-fluid rounded-start ${styles.smlscreenimgsize}`} alt="..." />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img src='assets/pandas4.png' className={`d-block img-fluid rounded-start ${styles.smlscreenimgsize}`} alt="..." />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img src='assets/pandas5.png' className={`d-block img-fluid rounded-start ${styles.smlscreenimgsize}`} alt="..." />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img src='assets/pandas6.png' className={`d-block img-fluid rounded-start ${styles.smlscreenimgsize}`} alt="..." />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img src='assets/pandas7.png' className={`d-block img-fluid rounded-start ${styles.smlscreenimgsize}` } alt="..." />
                            </Carousel.Item>
                        </Carousel>
                        </div>
                    </div>
                </div>
                {/* {CARD 4} */}
                <div className={`card mb-3 rounded-4 ${styles.stickyStackCard} ${styles.sidespacer} ${styles.card4top} ${styles.nopaddingtop}`}>
                    <div className="row g-0">                       
                        <div className="col-md-5">
                        <div className="card-body">
                        <p className={styles.cardgradientheadingleft}>Restaurant Management App - 2024</p>
                        <h1 className={styles.cardherotitle}>4 Guys Restaurant 🍔</h1>
                        <hr className={styles.bigscreenhr}></hr>
                            <p className={`card-text mb-0 ${styles.cardtext} `}>4 Guys is a restaurant ordering system that enables customers to order food and drinks, 
                                reserve a table for a specific date and time, and cancel reservations if needed. Guests are required to register their 
                                name with the app before making a reservation. The system also supports printing menus and receipts for customer convenience. 
                                All information is securly saved to a database.</p>
                            <small className="text-body-secondary mb-0">C# + Maui + MariaDB (MariaSQL)</small>
                        </div>
                        <div style={{ alignSelf:'flex-start', width: '100%' }}>
                            <a href="https://github.com/KyleJamesD/4guysrestaurant/tree/main"
                            className={styles.githubbutton}
                            target="_blank"
                            rel="noopener noreferrer"
                            >GitHub 
                            <span style={{fontSize: '1em'}}>↗
                            </span></a>
                        </div>
                        </div>
                        <div className="col-md-7">
                        <Carousel fade interval={3000} indicators={false}> {/* 3s per slide */}
                            <Carousel.Item>
                            <img src='assets/4guys1.png' className="d-block w-200 img-fluid rounded-start" alt="..." />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img src='assets/4guys2.png' className="d-block w-200 img-fluid rounded-start" alt="..." />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img src='assets/4guys3.png' className="d-block w-200 img-fluid rounded-start" alt="..." />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img src='assets/4guys4.png' className="d-block w-200 img-fluid rounded-start" alt="..." />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img src='assets/4guys5.png' className="d-block w-200 img-fluid rounded-start" alt="..." />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img src='assets/4guys6.png' className="d-block w-200 img-fluid rounded-start" alt="..." />
                            </Carousel.Item>
                        </Carousel>
                        </div>
                    </div>
                </div>
                {/* {CARD 5} */}
                <div className={`card mb-3 rounded-4 ${styles.stickyStackCard} ${styles.sidespacer} ${styles.card5top} ${styles.nopaddingtop}`}>
                    <div className="row g-0">                       
                        <div className="col-md-5">
                        <div className="card-body">
                        <p className={styles.cardgradientheadingright}>Music Player App - 2024</p>
                        <h1 className={styles.cardherotitle}>Ola Sound 🎵</h1>
                        <hr className={styles.bigscreenhr}></hr>
                            <p className={`card-text mb-0 ${styles.cardtext} `}>Ola Sound is a React Native mobile app that lets users stream music through a simple interface, powered by the Deezer API. Designed for easy setup and customization, it utilizes modern React Native tools such as React Navigation and Track Player, and supports both Android and iOS platforms. With straightforward installation and login, Ola Sound demonstrates a scalable foundation for mobile audio streaming experiences.</p>
                            <small className="text-body-secondary mb-0">React Native + Typescript + Firestore + Deezer API + Android </small>
                        </div>
                        <div>
                            <a href="https://github.com/KyleJamesD/olasound"
                            className={styles.githubbutton}
                            target="_blank"
                            rel="noopener noreferrer"
                            >GitHub 
                            <span style={{fontSize: '1em'}}>↗
                            </span></a>
                        </div>
                        </div>
                            <div className="col-md-7" >
                                <div className={``}>
                                <Carousel fade interval={3000} indicators={false}> {/* 3s per slide */}
                                    <Carousel.Item>
                                    <div className={`d-flex justify-content-center align-items-center`}>
                                        <img src='assets/olasound1.png' className={`d-block img-fluid rounded-start ${styles.lrgscreenimgsize} ${styles.smlscreenolasize}`} alt="..." />
                                    </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                    <div className={`d-flex justify-content-center align-items-center`}>
                                        <img src='assets/olasound2.png' className={`d-block img-fluid rounded-start ${styles.lrgscreenimgsize} ${styles.smlscreenolasize}`} alt="..." />
                                    </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                    <div className={`d-flex justify-content-center align-items-center`}>
                                        <img src='assets/olasound3.png' className={`d-block img-fluid rounded-start ${styles.lrgscreenimgsize} ${styles.smlscreenolasize}`} alt="..." />
                                    </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                    <div className={`d-flex justify-content-center align-items-center`}>
                                        <img src='assets/olasound4.png' className={`d-block img-fluid rounded-start ${styles.lrgscreenimgsize} ${styles.smlscreenolasize}`} alt="..." />
                                    </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                    <div className={`d-flex justify-content-center align-items-center`}>
                                        <img src='assets/olasound5.png' className={`d-block img-fluid rounded-start ${styles.lrgscreenimgsize} ${styles.smlscreenolasize}`} alt="..." />
                                    </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                    <div className={`d-flex justify-content-center align-items-center`}>
                                        <img src='assets/olasound6.png' className={`d-block img-fluid rounded-start ${styles.lrgscreenimgsize} ${styles.smlscreenolasize}`} alt="..." />
                                    </div>
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
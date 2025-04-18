import styles from './projects.module.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import kyle_studying from '../../assets/kyle_studying.png';
import { Carousel } from 'react-bootstrap';

const Projects = () => {
    return (
            <div id="projects" className='container' style={{marginTop: '20%'}}>
                <p className={styles.gradientheading} >REAL WORLD SOLUTIONS</p>
                <h1 className={styles.herotitle}> Personal Projects </h1>
                <h5 className={styles.herotext}>Building one step at a time.</h5>
                

                <div className='row justify-content-md-center row-cols-1'>
                <div className="card mb-3" style={{maxWidth:'1040px'}}>
                    <div className="row g-0">                       
                        <div className="col-md-4">
                        <div className="card-body">
                        <p className={styles.cardgradientheading}>Inventory Management System - 2025</p>
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
                        <div className="col-md-8">
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


                <div className='col'>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                </div>
                <div className='col'>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                </div>
                <div className='col'>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                </div>
                <div className='col'>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                </div>
                <div className='col'>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </div>
                </div>
            </div>


    ); 
}

export default Projects;
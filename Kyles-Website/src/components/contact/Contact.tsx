import styles from './Contact.module.css';



const Contact = () => {
    return (
        <div id="contact" className={` d-flex justify-content-center align-items-center `} style={{ height: '100vh'}}>
            <div className='container'>
                <div className='row' >
                    <div className='d-flex flex-column align-items-center'>
                    <p className={`${styles.cardgradientheadingleft} ${styles.spacer}` }>Contact me</p>
                    </div>
                </div>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-md-9'>
                                <div className={`card rounded-4 p-3 ${styles.cardshadow} ${styles.cardbackground}`}>
                                        <div className="row align-items-center">
                                            {/* { col-md-5 takes up 5 of the 12 horizontal spaces of a container} */}
                                            <div className="col-md-8">
                                            <div className="card-body ">
                                            <h2 className={styles.herotitle}>Let's Get In Touch!</h2>
                                            <hr></hr>
                                                <p className={styles.herotext}>Have a job offer or a project in mind? I'm always available for coffee and I love networking! please feel free to reach out to me!</p>
                                            </div>
                                            </div>
                                            <div className="col-md-4 d-flex flex-column align-items-center gap-3">

                                                    <a href="mailto:kyledyck@outlook.com"
                                                    className={styles.githubbutton}
                                                    >Email Me 
                                                    <span style={{fontSize: '1em'}}>↗
                                                    </span></a>


                                                        <a href="https://www.linkedin.com/in/kyle-dyck-487225288/"
                                                        className={styles.githubbutton}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        >Linkedin 
                                                        <span style={{fontSize: '1em'}}>↗
                                                        </span></a>
                                            </div>
                                        </div>
                                </div>
                        </div>
                    </div>

                    <div style={{marginTop: '5%'}}>
                        <hr></hr>
                        <p>© 2025 - Kyle Dyck - kyledyck@outlook.com </p>
                    </div>
                    <div>
                    <h1 className={styles.herotitle}>Thank you!</h1>
                        
                    </div>
            </div>
        </div>
    );
}

export default Contact;
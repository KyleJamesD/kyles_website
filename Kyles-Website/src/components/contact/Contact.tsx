import styles from './Contact.module.css';



const Contact = () => {
    return (
        <div id="contact">
            <div className='container'>
                <div className='row' style={{ marginTop:'10%'}}>
                    <div className='d-flex flex-column align-items-center'>
                    <p className={styles.cardgradientheadingleft}>Contact me</p>
                    </div>
                </div>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-md-9'>
                                <div className={`card rounded-4 h-100 ${styles.cardshadow} ${styles.cardbackground}`}>
                                        <div className="row g-0 h-100 align-items-center">
                                            {/* { col-md-5 takes up 5 of the 12 horizontal spaces of a container} */}
                                            <div className="col-md-8">
                                            <div className="card-body ">
                                            <h2 className={styles.herotitle}>Let's Get In Touch!</h2>
                                            <hr></hr>
                                                <p className={styles.herotext}>Have a job offer or a project in mind? Im always available for coffee and I love networking! please feel free to reach out to me!</p>
                                            </div>
                                            </div>
                                            <div className="col-md-4">
                                                    <div className='d-flex justify-content-center align-content-center'>
                                                        <a href="mailto:kyledyck@outlook.com"
                                                        className={styles.githubbutton}
                                                        >Email Me 
                                                        <span style={{fontSize: '1em'}}>↗
                                                        </span></a>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                        </div>
                    </div>

                    <div style={{marginTop: '8%'}}>
                        <hr></hr>
                        <p>© 2025 - Kyle Dyck </p>
                    </div>
            </div>
        </div>
    );
}

export default Contact;
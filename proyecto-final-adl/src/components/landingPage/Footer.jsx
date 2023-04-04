const Footer = () => {
    return (
        <footer className="footer text-center text-lg-start bg-light text-muted">
            <div className="container">
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div>
                        <a href="/" className="me-4 text-reset">
                            <i className="fa fa-facebook-f"></i>
                        </a>
                        <a href="/" className="me-4 text-reset">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a href="/" className="me-4 text-reset">
                            <i className="fa fa-google"></i>
                        </a>
                        <a href="/" className="me-4 text-reset">
                            <i className="fa fa-instagram"></i>
                        </a>
                        <a href="/" className="me-4 text-reset">
                            <i className="fa fa-linkedin"></i>
                        </a>
                    </div>
                </section>

                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>SalesMetrics

                                </h6>
                                <p>
                                SalesMetrics es una plataforma de visualizacion
                                de graficos extraidos desde tus archivos csv 
                                para que puedas visualizas y analisar tus ventas
                                de una forma mucho mas amigable.
                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    About us
                                </h6>
                                <p>
                                    <a href="/features" className="text-reset">
                                        Functionalities
                                    </a>
                                </p>
                              
                                <p>
                                    <a href="#!" className="text-reset">
                                        Terms and conditions
                                    </a>
                                </p>
                               
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Help material
                                </h6>
                                <p>
                                    <a href="/faq" className="text-reset">
                                        FAQ
                                    </a>
                                </p>
                             
                                <p>
                                    <a href="#!" className="text-reset">
                                        Help center
                                    </a>
                                </p>
                                
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Contact
                                </h6>
            
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    SalesMetrics@gmail.com
                                </p>
                                <p>
                                    <i className="fas fa-phone me-3"></i>
                                    (+56) 9 2391 4488
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="text-center p-4">
                © 2023 Copyright:
                <a
                    className="text-reset fw-bold"
                    href="/"
                >
                    Desafio Latam
                </a>
            </div>
        </footer>
    );
};

export default Footer;

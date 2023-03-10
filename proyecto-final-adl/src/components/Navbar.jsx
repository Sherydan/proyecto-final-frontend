const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <h1>Logo</h1>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="#"
                                >
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#features-1">
                                    About us
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#system-features">
                                    Features
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#pricing">
                                    Pricing
                                </a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" href="#faq">
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex">
                        <button
                            className="btn btn-outline-success"
                            type="submit"
                        >
                            Register
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;

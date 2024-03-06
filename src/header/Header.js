import './header.css';

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-md bg-dark sticky-top border-bottom" data-bs-theme="dark">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasLabel">Aperture</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav flex-grow-1 justify-content-between">
                            <li className="nav-item"><a className="nav-link">Tour</a></li>
                            <li className="nav-item"><a className="nav-link">Product</a></li>
                            <li className="nav-item"><a className="nav-link">Features</a></li>
                            <li className="nav-item"><a className="nav-link">Enterprise</a></li>
                            <li className="nav-item"><a className="nav-link">Support</a></li>
                            <li className="nav-item"><a className="nav-link">Pricing</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;
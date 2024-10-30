const Header = () => {
    return (
      <header className="rainbow-header header-default header-transparent header-sticky">
        <div className="container position-relative">
          <div className="row align-items-center row--0">
            {/* Logo Section */}
            <div className="col-lg-2 col-md-6 col-6">
              <div className="logo">
                <a href="/">
                  <img
                    className="logo-light"
                    src="/assets/images/logo/logo.png"
                    alt="ChatBot Logo"
                  />
                </a>
              </div>
            </div>
  
            {/* Navigation Menu */}
            <div className="col-lg-8 d-none d-lg-block">
              <nav className="mainmenu-nav d-none d-lg-flex justify-content-center">
                <ul className="mainmenu">
                  <li><a href="/">Home</a></li>
                  <li><a href="/features">Features</a></li>
                  <li><a href="/pricing">Pricing</a></li>
                  <li><a href="/roadmap">Roadmap</a></li>
                  <li><a href="/utilize">How to use</a></li>
                </ul>
              </nav>
            </div>
  
            {/* Header Right (Button and Mobile Menu) */}
            <div className="col-lg-2 col-md-6 col-6 position-static">
              <div className="header-right">
                {/* Start Header Button */}
                <div className="header-btn">
                  <a
                    className="rainbow-gradient-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="/text-generator"
                  >
                    <span>Get Start</span>
                  </a>
                </div>
                {/* End Header Button */}
  
                {/* Start Mobile Menu Bar */}
                <div className="mobile-menu-bar ml--5 d-flex justify-content-end d-lg-none">
                  <div className="hamberger">
                    <button className="hamberger-button">
                      <i className="fa-sharp fa-regular fa-bars"></i>
                    </button>
                  </div>
                </div>
                {/* End Mobile Menu Bar */}
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;
  
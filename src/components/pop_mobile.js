const MobileMenu = () => {
    return (
      <div className="popup-mobile-menu">
        <div className="inner-popup">
          {/* Header Top (Logo and Close Button) */}
          <div className="header-top">
            <div className="logo">
              <a href="/">
                <img
                  className="logo-light"
                  src="/assets/images/logo/logo.png"
                  alt="ChatBot Logo"
                />
              </a>
            </div>
            <div className="close-menu">
              <button className="close-button">
                <i className="fa-sharp fa-regular fa-x"></i>
              </button>
            </div>
          </div>
  
          {/* Menu Content */}
          <div className="content">
            <ul className="mainmenu">
              <li><a href="/">Home</a></li>
              <li><a href="/features">Features</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/roadmap">Roadmap</a></li>
              <li><a href="/utilize">How to use</a></li>
            </ul>
          </div>
  
          {/* Header Button (Only visible on small screens) */}
          <div className="header-btn d-block d-md-none">
            <a
              className="btn-default"
              target="_blank"
              rel="noopener noreferrer"
              href="/text-generator"
            >
              Get Started Free
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default MobileMenu;
  
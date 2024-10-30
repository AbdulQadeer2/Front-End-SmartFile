const Footer = () => {
    return (
      <footer className="rainbow-footer footer-style-default footer-style-3 position-relative">
        <div className="footer-top">
          <div className="container">
            <div className="row justify-content-between">
              {/* Logo and Newsletter */}
              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="rainbow-footer-widget">
                  <div className="logo">
                    <a href="/">
                      <img
                        className="logo-light"
                        src="/assets/images/logo/logo.png"
                        alt="ChatBot Logo"
                      />
                    </a>
                  </div>
                  <p className="b1 desc-text">
                    Your secure and efficient file-sharing platform.<br />
                    Share files instantly, effortlessly, and with ease.
                  </p>
                  <h6 className="subtitle">Join a Newsletter</h6>
                  <form className="newsletter-form" action="#">
                    <div className="form-group">
                      <input
                        type="email"
                        placeholder="Enter Your Email Here"
                      />
                      <button
                        className="btn-default bg-solid-primary"
                        type="submit"
                      >
                        <i className="fa-sharp fa-regular fa-arrow-right"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
  
              {/* Quick Links */}
              <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                <div className="rainbow-footer-widget">
                  <div className="widget-menu-bottom">
                    <h4 className="title">Quick Links</h4>
                    <div className="inner">
                      <ul className="footer-link link-hover">
                        <li><a href="/">Home</a></li>
                        <li><a href="/pricing">Pricing</a></li>
                        <li><a href="/features">Features</a></li>
                        <li><a href="/utilize">How to use</a></li>
                        <li><a href="/roadmap">Roadmap</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Support */}
              <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                <div className="rainbow-footer-widget">
                  <div className="widget-menu-top">
                    <h4 className="title">Support</h4>
                    <div className="inner">
                      <ul className="footer-link link-hover">
                        <li><a href="/contact">Contact Us</a></li>
                        <li><a href="/help">Help Support</a></li>
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                        <li><a href="/terms-policy">Terms And Condition</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Contact */}
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="rainbow-footer-widget">
                  <div className="widget-menu-top">
                    <h4 className="title">Contact</h4>
                    <div className="inner">
                      <ul className="footer-link contact-link">
                        <li>
                          <i className="contact-icon fa-regular fa-location-dot"></i>
                          <a href="#">Karachi, Pakistan</a>
                        </li>
                        <li>
                          <i className="contact-icon fa-sharp fa-regular fa-envelope"></i>
                          <a href="#">example@domain.com</a>
                        </li>
                        <li>
                          <i className="contact-icon fa-regular fa-phone"></i>
                          <a href="#">+1 386-688-3295</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
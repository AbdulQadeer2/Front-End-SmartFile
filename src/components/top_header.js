const HeaderTopNews = () => {
    return (
      <div className="header-top-news bg-image1">
        <div className="wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner">
                  <div className="content">
                    <span className="rainbow-badge">Limited Time Offer</span>
                    <span className="news-text">
                      Intro price. Get Nexus Filehub for Big Sale -95% off.
                    </span>
                  </div>
                  <div className="right-button">
                    <a
                      className="btn-read-more"
                      target="_blank"
                      href="https://themeforest.net/user/pixcelsthemes"
                      rel="noopener noreferrer"
                    >
                      <span>
                        Purchase Now{" "}
                        <i className="fa-sharp fa-regular fa-arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="icon-close">
          <button className="close-button bgsection-activation">
            <i className="fa-sharp fa-regular fa-x"></i>
          </button>
        </div>
      </div>
    );
  };
  
  export default HeaderTopNews;
  
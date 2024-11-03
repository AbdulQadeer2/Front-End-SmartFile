import React from 'react';

const sharelink = () => {
    return (
        <>
        {/*..:: Start Breadcrumb Area  ::..*/}
        <div className="main-content">
          {/*..:: Start Breadcarumb area  ::..*/}
          <div className="breadcrumb-area breadcarumb-style-1 pt--180 pb--100">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="breadcrumb-inner text-center">
                    <h3 className="title h3">Thank You! For Using Nexus Filehub </h3>
                    <ul className="page-list">
                      <li className="rainbow-breadcrumb-item">
                        <a href="index.php">Home</a>
                      </li>
                      <li className="rainbow-breadcrumb-item active">Thank You!</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*..:: End Breadcarumb area  ::..*/}
        </div>
        {/*..:: Start Copy link Area  ::..*/}
        <div className="main-content">
          <div className="rainbow-contact-area rainbow-section-gapTop-big rainbow-section-gapBottom-big">
            <div className="container">
              <div className="row row--15 justify-content-center">
                <div className="col-lg-8">
                  <div className="contact-details-box">
                    <h3>Copy Your Link And Share</h3>
                    <div className="profile-details-tab">
                      {/*..:: Start Contact Row  ::..*/}
                      <div className="rbt-profile-row rbt-default-form row row--15">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="copy-link d-flex">
                            <div className="form-group w-80">
                              <input
                                htmlFor="copyfilelink"
                                id="copyfilelink"
                                type="text"
                                defaultValue="https://example.com/download/yourfile123"
                                readOnly=""
                              />
                            </div>
                            <div className="form-group w-20">
                              <a
                                className="btn-default copyfilelink-btn ml--10"
                                href="#"
                              >
                                <i className="fa-sharp fa-solid fa-copy" /> Copy
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*..:: End Contact Row  ::..*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*..:: End Copy Link Area  ::..*/}
      </>
      
    );
};

export default sharelink;
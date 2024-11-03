import React from 'react';
import Image from 'next/image';
import FileUpload from '../components/fileupload'

const Home = () => {
  return (
    <main className="page-wrapper">
      {/*..:: Start Slider Area  ::..*/}
      <div
        className="slider-area slider-style-1 variation-default slider-bg-image bg-banner1 slider-bg-shape"
        data-black-overlay={1}
      >
        {/*..:: <div class="bg-blend-top bg_dot-mask"></div> ::..*/}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="inner text-center mt--140">
                <h1 className="title display-one">
                  Easy share files with anyone
                  <br />{" "}
                  <span className="header-caption">
                    <span className="cd-headline rotate-1">
                      <span className="cd-words-wrapper" style={{ width: 221 }}>
                        <b className="theme-gradient is-visible">Simple</b>
                        <b className="theme-gradient is-hidden">Secure</b>
                        <b className="theme-gradient is-hidden">Speedy</b>
                      </span>
                    </span>
                  </span>{" "}
                  File Sharing
                </h1>
                <p className="description">
                  Nexus Filehub: Share files instantly, securely, and effortlessly.
                  Your data, your control.
                </p>
                <div className="inner-shape">
                  <Image
                    src="/assets/images/bg/icon-shape/icon-shape-one.png"
                    alt="Icon Shape One"
                    className="iconshape iconshape-one"
                    width={100}
                    height={95}
                  />
                  <Image
                    src="/assets/images/bg/icon-shape/icon-shape-two.png"
                    alt="Icon Shape Two"
                    className="iconshape iconshape-two"
                    width={67}
                    height={67}
                  />
                  <Image
                    src="/assets/images/bg/icon-shape/icon-shape-three.png"
                    alt="Icon Shape Three"
                    className="iconshape iconshape-three"
                    width={70}
                    height={70}
                  />
                  <Image
                    src="/assets/images/bg/icon-shape/icon-shape-four.png"
                    alt="Icon Shape Four"
                    className="iconshape iconshape-four"
                    width={100}
                    height={95}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-12 justify-content-center">
              {/* upload file */}
              <FileUpload />
            </div>
          </div>
        </div>
        <div className="bg-shape">
          <img
            className="bg-shape-one"
            src="assets/images/bg/bg-shape-four.png"
            alt="Bg Shape"
          />
          <img
            className="bg-shape-two"
            src="assets/images/bg/bg-shape-five.png"
            alt="Bg Shape"
          />
        </div>
      </div>
      {/*..:: End Slider Area  ::..*/}
      {/*..:: Start Brand Area ::..*/}
      <div className="rainbow-brand-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title rating-title text-center sal-animate"
                data-sal="slide-up"
                data-sal-duration={700}
                data-sal-delay={100}
              >
                <p className="b1 mb--0 small-title">
                  truest 800,000+ HIGHLY PRODUCTIVE Company
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mt--10">
              <ul className="brand-list brand-style-2 slider-brand slider-brand-activation">
                <li className="slide-single-layout">
                  <a href="#">
                    <img src="assets/images/brand/strapi.png" alt="Brand Image" />
                  </a>
                </li>
                <li className="slide-single-layout">
                  <a href="#">
                    <img src="assets/images/brand/mapbox.png" alt="Brand Image" />
                  </a>
                </li>
                <li className="slide-single-layout">
                  <a href="#">
                    <img
                      src="assets/images/brand/stenciljs.png"
                      alt="Brand Image"
                    />
                  </a>
                </li>
                <li className="slide-single-layout">
                  <a href="#">
                    <img src="assets/images/brand/spotify.png" alt="Brand Image" />
                  </a>
                </li>
                <li className="slide-single-layout">
                  <a href="#">
                    <img
                      src="assets/images/brand/woocommerce.png"
                      alt="Brand Image"
                    />
                  </a>
                </li>
                <li className="slide-single-layout">
                  <a href="#">
                    <img src="assets/images/brand/slack.png" alt="Brand Image" />
                  </a>
                </li>
                <li className="slide-single-layout">
                  <a href="#">
                    <img src="assets/images/brand/strapi.png" alt="Brand Image" />
                  </a>
                </li>
                <li className="slide-single-layout">
                  <a href="#">
                    <img src="assets/images/brand/mapbox.png" alt="Brand Image" />
                  </a>
                </li>
                <li className="slide-single-layout">
                  <a href="#">
                    <img
                      src="assets/images/brand/stenciljs.png"
                      alt="Brand Image"
                    />
                  </a>
                </li>
                <li className="slide-single-layout">
                  <a href="#">
                    <img src="assets/images/brand/spotify.png" alt="Brand Image" />
                  </a>
                </li>
                <li className="slide-single-layout">
                  <a href="#">
                    <img
                      src="assets/images/brand/woocommerce.png"
                      alt="Brand Image"
                    />
                  </a>
                </li>
                <li className="slide-single-layout">
                  <a href="#">
                    <img src="assets/images/brand/slack.png" alt="Brand Image" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*..:: Start Tab__Style--one Area  ::..*/}
      <div className="rainbow-service-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center pb--60"
                data-sal="slide-up"
                data-sal-duration={700}
                data-sal-delay={100}
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">
                    Advanced File Sharing Features
                  </span>
                </h4>
                <h2 className="title mb--0">
                  Choose the best way
                  <br />
                  to share your files.
                </h2>
              </div>
            </div>
          </div>
          <div className="row row--30 align-items-center">
            <div className="col-lg-12">
              <div className="rainbow-default-tab style-three generator-tab-defalt">
                <ul className="nav nav-tabs tab-button" role="tablist">
                  <li className="nav-item tabs__tab " role="presentation">
                    <button
                      className="nav-link rainbow-gradient-btn without-shape-circle active"
                      id="video-generator-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#video-generate"
                      type="button"
                      role="tab"
                      aria-controls="video-generate"
                      aria-selected="true"
                    >
                      <span className="generator-icon">
                        <img
                          src="assets/images/icons/quick.png"
                          alt="Video Generator Icon"
                        />
                        Quick Sharing
                      </span>
                      <span className="border-bottom-style" />
                    </button>
                  </li>
                  <li className="nav-item tabs__tab" role="presentation">
                    <button
                      className="nav-link rainbow-gradient-btn without-shape-circle"
                      id="audio-generator-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#audio-generate"
                      type="button"
                      role="tab"
                      aria-controls="audio-generate"
                      aria-selected="false"
                    >
                      <span className="generator-icon">
                        <img
                          src="assets/images/icons/secure.png"
                          alt="Video Generator Icon"
                        />
                        Secure Sharing
                      </span>
                      <span className="border-bottom-style" />
                    </button>
                  </li>
                  <li className="nav-item tabs__tab " role="presentation">
                    <button
                      className="nav-link rainbow-gradient-btn without-shape-circle"
                      id="photo-generator-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#photo-generate"
                      type="button"
                      role="tab"
                      aria-controls="photo-generate"
                      aria-selected="false"
                    >
                      <span className="generator-icon">
                        <img
                          src="assets/images/icons/encrypt.png"
                          alt="Video Generator Icon"
                        />
                        Encrypted Sharing
                      </span>
                      <span className="border-bottom-style" />
                    </button>
                  </li>
                </ul>
                <div className="rainbow-tab-content tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="video-generate"
                    role="tabpanel"
                    aria-labelledby="video-generator-tab"
                  >
                    <div className="inner">
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="section-title">
                            <h2 className="title">
                              Share your files in seconds with Quick Share.
                            </h2>
                            <div className="features-section">
                              <ul className="list-style--1">
                                <li>
                                  <i className="fa-regular fa-circle-check" />
                                  Instant File Sharing
                                </li>
                                <li>
                                  <i className="fa-regular fa-circle-check" />
                                  No Registration Required
                                </li>
                                <li>
                                  <i className="fa-regular fa-circle-check" />
                                  Secure Transmission
                                </li>
                                <li>
                                  <i className="fa-regular fa-circle-check" />
                                  Limited Access
                                </li>
                              </ul>
                            </div>
                            <div className="read-more">
                              <a className="btn-default color-blacked" href="#">
                                Start Exploring Now{" "}
                                <i className="fa-sharp fa-solid fa-arrow-right" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6 mt_md--30 mt_sm--30">
                          <div className="export-img">
                            <div className="inner-without-padding">
                              <div className="export-img img-bg-shape">
                                <img
                                  src="assets/images/generator-img/quick-share.png"
                                  alt="Chat example Image"
                                />
                                <div className="image-shape" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="audio-generate"
                    role="tabpanel"
                    aria-labelledby="audio-generator-tab"
                  >
                    <div className="inner">
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="section-title">
                            <h2 className="title">
                              Protect Your Data with Password Protection.
                            </h2>
                            <div className="features-section">
                              <ul className="list-style--1">
                                <li>
                                  <i className="fa-regular fa-circle-check" />
                                  Protected file Sharing
                                </li>
                                <li>
                                  <i className="fa-regular fa-circle-check" />
                                  Restricted Access
                                </li>
                                <li>
                                  <i className="fa-regular fa-circle-check" />
                                  Secure Transmission
                                </li>
                                <li>
                                  <i className="fa-regular fa-circle-check" />
                                  Password Expiration
                                </li>
                              </ul>
                            </div>
                            <div className="read-more">
                              <a className="btn-default color-blacked" href="#">
                                Start Exploring Now{" "}
                                <i className="fa-sharp fa-solid fa-arrow-right" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6 mt_md--30 mt_sm--30">
                          <div className="export-img">
                            <div className="inner-without-padding">
                              <div className="export-img img-bg-shape">
                                <img
                                  src="assets/images/generator-img/chat-export-video.png"
                                  alt="Chat example Image"
                                />
                                <div className="image-shape" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="photo-generate"
                    role="tabpanel"
                    aria-labelledby="photo-generator-tab"
                  >
                    <div className="inner">
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="section-title">
                            <h2 className="title">
                              Confidentiality with End-to-End Encryption.
                            </h2>
                            <div className="features-section">
                              <ul className="list-style--1">
                                <li>
                                  <i className="fa-regular fa-circle-check" />
                                  Encrypted File Sharing
                                </li>
                                <li>
                                  <i className="fa-regular fa-circle-check" />
                                  Prevent Data Breaches
                                </li>
                                <li>
                                  <i className="fa-regular fa-circle-check" />
                                  Protect Sensitive Information
                                </li>
                                <li>
                                  <i className="fa-regular fa-circle-check" />
                                  Limited Access
                                </li>
                              </ul>
                            </div>
                            <div className="read-more">
                              <a className="btn-default color-blacked" href="#">
                                Coming Soon{" "}
                                <i className="fa-sharp fa-solid fa-arrow-right" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6 mt_md--30 mt_sm--30">
                          <div className="export-img">
                            <div className="inner-without-padding">
                              <div className="export-img img-bg-shape">
                                <img
                                  src="assets/images/generator-img/chat-export-photo.png"
                                  alt="Chat example Image"
                                />
                                <div className="image-shape" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*..:: End Tab__Style--one Area  ::..*/}
      {/*..:: Start Service__Style--one Area  ::..*/}
      <div className="rainbow-service-area rainbow-section-gap rainbow-section-gapBottom-big">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-left"
                data-sal="slide-up"
                data-sal-duration={400}
                data-sal-delay={150}
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Why Choose Us</span>
                </h4>
                <h2 className="title mb--60">
                  Experience fast, secure, <br /> and seamless file transfersh
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="service-wrapper rainbow-service-slider-actvation slick-grid-15 rainbow-slick-dot rainbow-gradient-arrows">
                <div className="slide-single-layout">
                  <div className="rainbow-box-card card-style-default aiwave-service-default has-bg-shaped">
                    <div className="inner">
                      <div className="icon">
                        <img
                          src="assets/images/icons/service-icon-05.svg"
                          alt="Servece Icon"
                        />
                      </div>
                      <div className="description centered-shape">
                        <h5 className="title">Unmatched Security</h5>
                        <p className="desc">
                          Our platform safeguards your data with encryption and
                          password protection, ensuring your files remain secure.
                        </p>
                        <a className="read-more-btn" href="#">
                          Explore More{" "}
                          <span>
                            <i className="fa-sharp fa-solid fa-arrow-right" />
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="bg-shaped">
                      <img
                        src="assets/images/service/bg.png"
                        alt=""
                        className="bg"
                      />
                      <img
                        src="assets/images/service/bg-hover.png"
                        alt=""
                        className="bg-hover"
                      />
                    </div>
                  </div>
                </div>
                <div className="slide-single-layout">
                  <div className="rainbow-box-card card-style-default aiwave-service-default has-bg-shaped">
                    <div className="inner">
                      <div className="icon">
                        <img
                          src="assets/images/icons/service-icon-06.svg"
                          alt="Servece Icon"
                        />
                      </div>
                      <div className="description centered-shape">
                        <h5 className="title">Versatile Sharing Options</h5>
                        <p className="desc">
                          From quick sharing to encrypted transfers, we provide
                          flexible options for both personal and business file
                          sharing.
                        </p>
                        <a className="read-more-btn" href="#">
                          Explore More{" "}
                          <span>
                            <i className="fa-sharp fa-solid fa-arrow-right" />
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="bg-shaped">
                      <img
                        src="assets/images/service/bg.png"
                        alt=""
                        className="bg"
                      />
                      <img
                        src="assets/images/service/bg-hover.png"
                        alt=""
                        className="bg-hover"
                      />
                    </div>
                  </div>
                </div>
                <div className="slide-single-layout">
                  <div className="rainbow-box-card card-style-default aiwave-service-default has-bg-shaped">
                    <div className="inner">
                      <div className="icon">
                        <img
                          src="assets/images/icons/service-icon-07.svg"
                          alt="Servece Icon"
                        />
                      </div>
                      <div className="description centered-shape">
                        <h5 className="title"> Simple and Fast</h5>
                        <p className="desc">
                          Upload, share, and go – it&apos;s that easy. With intuitive
                          design and streamlined processes, sending files has never
                          been quicker.
                        </p>
                        <a className="read-more-btn" href="#">
                          Explore More{" "}
                          <span>
                            <i className="fa-sharp fa-solid fa-arrow-right" />
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="bg-shaped">
                      <img
                        src="assets/images/service/bg.png"
                        alt=""
                        className="bg"
                      />
                      <img
                        src="assets/images/service/bg-hover.png"
                        alt=""
                        className="bg-hover"
                      />
                    </div>
                  </div>
                </div>
                <div className="slide-single-layout">
                  <div className="rainbow-box-card card-style-default aiwave-service-default has-bg-shaped">
                    <div className="inner">
                      <div className="icon">
                        <img
                          src="assets/images/icons/service-icon-04.svg"
                          alt="Servece Icon"
                        />
                      </div>
                      <div className="description centered-shape">
                        <h5 className="title">User-Friendly Interface</h5>
                        <p className="desc">
                          Navigate our platform with ease. Experience a seamless
                          file-sharing journey without any technical complexities.
                        </p>
                        <a className="read-more-btn" href="#">
                          Explore More{" "}
                          <span>
                            <i className="fa-sharp fa-solid fa-arrow-right" />
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="bg-shaped">
                      <img
                        src="assets/images/service/bg.png"
                        alt=""
                        className="bg"
                      />
                      <img
                        src="assets/images/service/bg-hover.png"
                        alt=""
                        className="bg-hover"
                      />
                    </div>
                  </div>
                </div>
                <div className="slide-single-layout">
                  <div className="rainbow-box-card card-style-default aiwave-service-default has-bg-shaped">
                    <div className="inner">
                      <div className="icon">
                        <img
                          src="assets/images/icons/service-icon-02.svg"
                          alt="Servece Icon"
                        />
                      </div>
                      <div className="description centered-shape">
                        <h5 className="title">Lightning-Fast Transfers</h5>
                        <p className="desc">
                          Experience fast file transfers that won&apos;t keep you
                          waiting. Upload and download files in record time, saving
                          you time.
                        </p>
                        <a className="read-more-btn" href="#">
                          Explore More{" "}
                          <span>
                            <i className="fa-sharp fa-solid fa-arrow-right" />
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="bg-shaped">
                      <img
                        src="assets/images/service/bg.png"
                        alt=""
                        className="bg"
                      />
                      <img
                        src="assets/images/service/bg-hover.png"
                        alt=""
                        className="bg-hover"
                      />
                    </div>
                  </div>
                </div>
                <div className="slide-single-layout">
                  <div className="rainbow-box-card card-style-default aiwave-service-default has-bg-shaped">
                    <div className="inner">
                      <div className="icon">
                        <img
                          src="assets/images/icons/service-icon-03.svg"
                          alt="Servece Icon"
                        />
                      </div>
                      <div className="description centered-shape">
                        <h5 className="title">Generous Storage Limits</h5>
                        <p className="desc">
                          Enjoy storage space to accommodate all your files without
                          worrying about limitations. Share files of any size with
                          ease.
                        </p>
                        <a className="read-more-btn" href="#">
                          Explore More{" "}
                          <span>
                            <i className="fa-sharp fa-solid fa-arrow-right" />
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="bg-shaped">
                      <img
                        src="assets/images/service/bg.png"
                        alt=""
                        className="bg"
                      />
                      <img
                        src="assets/images/service/bg-hover.png"
                        alt=""
                        className="bg-hover"
                      />
                    </div>
                  </div>
                </div>
                <div className="slide-single-layout">
                  <div className="rainbow-box-card card-style-default aiwave-service-default has-bg-shaped">
                    <div className="inner">
                      <div className="icon">
                        <img
                          src="assets/images/icons/service-icon-01.svg"
                          alt="Servece Icon"
                        />
                      </div>
                      <div className="description centered-shape">
                        <h5 className="title">Customer Support</h5>
                        <p className="desc">
                          We&apos;re here to assist you every step of the way. Our
                          dedicated customer support team is available to address
                          your questions.
                        </p>
                        <a className="read-more-btn" href="#">
                          Explore More{" "}
                          <span>
                            <i className="fa-sharp fa-solid fa-arrow-right" />
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="bg-shaped">
                      <img
                        src="assets/images/service/bg.png"
                        alt=""
                        className="bg"
                      />
                      <img
                        src="assets/images/service/bg-hover.png"
                        alt=""
                        className="bg-hover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*..:: End Service__Style--one Area  ::..*/}
      {/*..:: Start Advanced Tab area ::..*/}
      <div className="rainbow-advance-tab-area aiwave-bg-gradient rainbow-section-gap-big">
        <div className="container">
          <div className="html-tabs" data-tabs="true">
            <div className="row row--30">
              <div className="col-lg-12">
                <div className="tab-content">
                  <div
                    className="tab-pane fade show active advance-tab-content-1 right-top"
                    id="home-3"
                    role="tabpanel"
                    aria-labelledby="home-tab-3"
                  >
                    <div className="rainbow-splite-style">
                      <div className="split-wrapper">
                        <div className="row g-0 radius-10 align-items-center">
                          <div className="col-lg-12 col-xl-5 col-12">
                            <div className="thumbnail">
                              <img
                                className="radius"
                                src="assets/images/split/split-1.png"
                                alt="split Images"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 col-xl-7 col-12">
                            <div className="split-inner">
                              <div className="subtitle">
                                <span className="theme-gradient">How it work</span>
                              </div>
                              <h2
                                className="title sal-animate"
                                data-sal="slide-up"
                                data-sal-duration={400}
                                data-sal-delay={200}
                              >
                                Upload Your Files
                              </h2>
                              <p
                                className="description sal-animate"
                                data-sal="slide-up"
                                data-sal-duration={400}
                                data-sal-delay={300}
                              >
                                Simply drag and drop your files or browse to select
                                them. Our platform supports a wide range of file
                                formats for seamless uploading.
                              </p>
                              <div
                                className="view-more-button mt--35 sal-animate"
                                data-sal="slide-up"
                                data-sal-duration={400}
                                data-sal-delay={400}
                              >
                                <a
                                  className="btn-default color-blacked"
                                  href="contact.php"
                                >
                                  Try It Now{" "}
                                  <i className="fa-sharp fa-light fa-arrow-right ml--5" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade advance-tab-content-1"
                    id="profile-3"
                    role="tabpanel"
                    aria-labelledby="profile-tab-3"
                  >
                    <div className="rainbow-splite-style">
                      <div className="split-wrapper">
                        <div className="row g-0 radius-10 align-items-center">
                          <div className="col-lg-12 col-xl-5 col-12">
                            <div className="thumbnail">
                              <img
                                className="radius"
                                src="assets/images/split/split-4.png"
                                alt="split Images"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 col-xl-7 col-12">
                            <div className="split-inner">
                              <div className="subtitle">
                                <span className="theme-gradient">How it work</span>
                              </div>
                              <h2
                                className="title sal-animate"
                                data-sal="slide-up"
                                data-sal-duration={400}
                                data-sal-delay={200}
                              >
                                Choose Sharing Method
                              </h2>
                              <p
                                className="description sal-animate"
                                data-sal="slide-up"
                                data-sal-duration={400}
                                data-sal-delay={300}
                              >
                                Select your preferred sharing method. You can opt
                                for quick sharing via a generated link, secure
                                sharing with password protection, or encrypted
                                sharing for maximum confidentiality.
                              </p>
                              <div
                                className="view-more-button mt--35 sal-animate"
                                data-sal="slide-up"
                                data-sal-duration={400}
                                data-sal-delay={400}
                              >
                                <a
                                  className="btn-default color-blacked"
                                  href="contact.php"
                                >
                                  Try It Now{" "}
                                  <i className="fa-sharp fa-light fa-arrow-right ml--5" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade advance-tab-content-1"
                    id="contact-3"
                    role="tabpanel"
                    aria-labelledby="contact-tab-3"
                  >
                    <div className="rainbow-splite-style">
                      <div className="split-wrapper">
                        <div className="row g-0 radius-10 align-items-center">
                          <div className="col-lg-12 col-xl-5 col-12">
                            <div className="thumbnail">
                              <img
                                className="radius"
                                src="assets/images/split/split-3.png"
                                alt="split Images"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 col-xl-7 col-12">
                            <div className="split-inner">
                              <div className="subtitle">
                                <span className="theme-gradient">How it work</span>
                              </div>
                              <h2
                                className="title sal-animate"
                                data-sal="slide-up"
                                data-sal-duration={400}
                                data-sal-delay={200}
                              >
                                Share via Link or Email
                              </h2>
                              <p
                                className="description sal-animate"
                                data-sal="slide-up"
                                data-sal-duration={400}
                                data-sal-delay={300}
                              >
                                Once you&apos;ve chosen your sharing method, generate a
                                unique link or send the file directly via email.
                                Share the link with recipients, granting them access
                                to your files.
                              </p>
                              <div
                                className="view-more-button mt--35 sal-animate"
                                data-sal="slide-up"
                                data-sal-duration={400}
                                data-sal-delay={400}
                              >
                                <a
                                  className="btn-default color-blacked"
                                  href="contact.php"
                                >
                                  Try It Now{" "}
                                  <i className="fa-sharp fa-light fa-arrow-right ml--5" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade advance-tab-content-1"
                    id="explore-3"
                    role="tabpanel"
                    aria-labelledby="explore-tab-3"
                  >
                    <div className="rainbow-splite-style">
                      <div className="split-wrapper">
                        <div className="row g-0 radius-10 align-items-center">
                          <div className="col-lg-12 col-xl-5 col-12">
                            <div className="thumbnail">
                              <img
                                className="radius"
                                src="assets/images/split/split-5.png"
                                alt="split Images"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 col-xl-7 col-12">
                            <div className="split-inner">
                              <div className="subtitle">
                                <span className="theme-gradient">How It Work</span>
                              </div>
                              <h2
                                className="title sal-animate"
                                data-sal="slide-up"
                                data-sal-duration={400}
                                data-sal-delay={200}
                              >
                                Manage Shared Files
                              </h2>
                              <p
                                className="description sal-animate"
                                data-sal="slide-up"
                                data-sal-duration={400}
                                data-sal-delay={300}
                              >
                                Keep track of your shared files and their status.
                                View download statistics, revoke access if needed,
                                and manage your files effortlessly.
                              </p>
                              <div
                                className="view-more-button mt--35 sal-animate"
                                data-sal="slide-up"
                                data-sal-duration={400}
                                data-sal-delay={400}
                              >
                                <a
                                  className="btn-default color-blacked"
                                  href="contact.php"
                                >
                                  Coming Soon{" "}
                                  <i className="fa-sharp fa-light fa-arrow-right ml--5" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 mt--60">
                <div className="advance-tab-button advance-tab-button-1 right-top">
                  <ul
                    className="nav nav-tabs tab-button-list"
                    id="myTab-3"
                    role="tablist"
                  >
                    <li className="col-lg-3 nav-item" role="presentation">
                      <a
                        href="#"
                        className="nav-link tab-button active"
                        id="home-tab-3"
                        data-bs-toggle="tab"
                        data-bs-target="#home-3"
                        role="tab"
                        aria-controls="home-3"
                        aria-selected="true"
                      >
                        <div className="tab">
                          <div className="count-text">
                            <span className="theme-gradient">01</span>
                          </div>
                          <h4 className="title">Upload Your Files</h4>
                        </div>
                      </a>
                    </li>
                    <li className="col-lg-3 nav-item" role="presentation">
                      <a
                        href="#"
                        className="nav-link tab-button"
                        id="profile-tab-3"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-3"
                        role="tab"
                        aria-controls="profile-3"
                        aria-selected="false"
                      >
                        <div className="tab">
                          <div className="count-text">
                            <span className="theme-gradient">02</span>
                          </div>
                          <h4 className="title">Choose a Method</h4>
                        </div>
                      </a>
                    </li>
                    <li className="col-lg-3 nav-item" role="presentation">
                      <a
                        href="#"
                        className="nav-link tab-button"
                        id="contact-tab-3"
                        data-bs-toggle="tab"
                        data-bs-target="#contact-3"
                        role="tab"
                        aria-controls="contact-3"
                        aria-selected="false"
                      >
                        <div className="tab">
                          <div className="count-text">
                            <span className="theme-gradient">03</span>
                          </div>
                          <h4 className="title">Share via Link or Email</h4>
                        </div>
                      </a>
                    </li>
                    <li className="col-lg-3 nav-item" role="presentation">
                      <a
                        href="#"
                        className="nav-link tab-button"
                        id="explore-tab-3"
                        data-bs-toggle="tab"
                        data-bs-target="#explore-3"
                        role="tab"
                        aria-controls="explore-3"
                        aria-selected="false"
                      >
                        <div className="tab">
                          <div className="count-text">
                            <span className="theme-gradient">04</span>
                          </div>
                          <h4 className="title">Manage Shared Files</h4>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-shape">
          <img src="assets/images/bg/split-bg-shape.png" alt="Bg Shape" />
        </div>
      </div>
      {/*..:: End Advanced Tab Area ::..*/}
      {/*..:: Start Collabration-Style-One  ::..*/}
      <div className="rainbow-collobration-area rainbow-section-gap-big">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration={700}
                data-sal-delay={100}
              >
                <h4 className="subtitle ">
                  <span className="theme-gradient">Seamless Integration</span>
                </h4>
                <h2 className="title mb--20">
                  Effortless File Sharing <br /> Across Platforms
                </h2>
                <a
                  className="btn-default btn-large color-blacked"
                  href="contact.php"
                >
                  Try It Now{" "}
                  <i className="fa-sharp fa-light fa-arrow-right ml--5" />
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mt--60">
              <div className="collabration-image-section">
                <img
                  src="assets/images/split/split-2.png"
                  alt="collabration-image"
                />
                <div className="logo-section">
                  <div className="center-logo">
                    <img
                      src="assets/images/split/split-2-logo.png"
                      alt="Small Logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*..:: End Collabration-Style-One  ::..*/}
      {/*..:: Start CTA Style-one Area  ::..*/}
      <div className="rainbow-rn-cta">
        <div className="container">
          <div className="row row--0 align-items-center content-wrapper">
            <div className="col-lg-8">
              <div className="inner">
                <div className="content text-left">
                  <h4
                    className="title sal-animate"
                    data-sal="slide-up"
                    data-sal-duration={400}
                    data-sal-delay={200}
                  >
                    Protect Your Files with Encrypted Sharing – Start Now!
                  </h4>
                  <p
                    className="sal-animate"
                    data-sal="slide-up"
                    data-sal-duration={400}
                    data-sal-delay={300}
                  >
                    Ensure maximum security for your sensitive files with end-to-end
                    encryption. Share confidently, knowing only the intended
                    recipients can access your data.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="right-content">
                <div
                  className="call-to-btn text-start text-lg-end sal-animate"
                  data-sal="slide-up"
                  data-sal-duration={400}
                  data-sal-delay={400}
                >
                  <div className="team-image">
                    <img
                      src="assets/images/cta-img/team-01.png"
                      alt="Group Image"
                    />
                  </div>
                  <a className="btn-default" href="#">
                    Share Securely Now!
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-shape">
              <img src="assets/images/cta-img/bg-shape-01.png" alt="BG Shape" />
            </div>
          </div>
        </div>
      </div>
      {/*..:: End CTA Style-one Area  ::..*/}
      {/*..:: Pricing Part ::..*/}
      <div className="aiwave-pricing-area wrapper rainbow-section-gap-big">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration={400}
                data-sal-delay={150}
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Pricing</span>
                </h4>
                <h2 className="title w-600 mb--40">Pricing plans for everyone</h2>
              </div>
              <nav className="aiwave-tab">
                <div
                  className="tab-btn-grp nav nav-tabs text-center justify-content-center"
                  id="nav-tab"
                  role="tablist"
                >
                  <button
                    className="nav-link"
                    id="nav-home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-home"
                    type="button"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="false"
                  >
                    Monthly
                  </button>
                  <button
                    className="nav-link with-badge active"
                    id="nav-profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profile"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="true"
                  >
                    Yearly
                    <span className="rainbow-badge-card badge-border">-10%</span>
                  </button>
                </div>
              </nav>
            </div>
          </div>
          <div
            className="tab-content p-0 bg-transparent border-0 border bg-light"
            id="nav-tabContent"
          >
            <div
              className="tab-pane fade"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <div className="row row--15 mt_dec--40">
                <div className="col-xl-4 col-lg-6 col-md-6 col-12 mt--40">
                  <div className="rainbow-pricing style-aiwave">
                    <div className="pricing-table-inner">
                      <div className="pricing-top">
                        <div className="pricing-header">
                          <div className="icon">
                            <i className="fa-regular fa-circle-radiation" />
                          </div>
                          <h4 className="title color-var-one">Basic</h4>
                          <p className="subtitle">
                            For large teams &amp; corportaions
                          </p>
                          <div className="pricing">
                            <span className="price-text">Free</span>
                          </div>
                        </div>
                        <div className="pricing-body">
                          <div className="features-section">
                            <h6>Features</h6>
                            <ul className="list-style--1">
                              <li>
                                <i className="fa-regular fa-circle-check" /> 7,700
                                3-5 day turnarouord
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" /> 6+
                                Naive development
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" /> 5+ Task
                                delivered one-by-one
                              </li>
                              <li>
                                <i className="fa-sharp fa-regular fa-minus-circle" />{" "}
                                AI Blog Updates via dashboard &amp; slack
                              </li>
                              <li>
                                <i className="fa-sharp fa-regular fa-minus-circle" />{" "}
                                Advance Updates via dashboard &amp; slack
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="pricing-footer">
                        <a className="btn-default btn-border" href="#">
                          Get Started
                        </a>
                        <p className="bottom-text">Limited Offer</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-12 mt--40">
                  <div className="rainbow-pricing style-aiwave active">
                    <div className="pricing-table-inner">
                      <div className="pricing-top">
                        <div className="pricing-header">
                          <div className="icon">
                            <i className="fa-sharp fa-regular fa-flower" />
                          </div>
                          <h4 className="title color-var-two">Premium</h4>
                          <p className="subtitle">
                            For large teams &amp; corportaions
                          </p>
                          <div className="pricing">
                            <span className="price-text">$60.50</span>
                            <span className="text">/Per Month</span>
                          </div>
                        </div>
                        <div className="pricing-body">
                          <div className="features-section has-show-more">
                            <h6>Features</h6>
                            <ul className="list-style--1 has-show-more-inner-content">
                              <li>
                                <i className="fa-regular fa-circle-check" /> 12,700
                                7-9 day turnarouord
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" /> 6+
                                Naive development
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" /> 5+ Task
                                delivered one-by-one
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" /> 7,700
                                3-5 day turnarouord
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" /> 6+
                                Naive development
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" /> 5+ Task
                                delivered one-by-one
                              </li>
                              <li>
                                <i className="fa-sharp fa-regular fa-minus-circle" />{" "}
                                AI Blog Updates via dashboard &amp; slack
                              </li>
                              <li>
                                <i className="fa-sharp fa-regular fa-minus-circle" />{" "}
                                Advance Updates via dashboard &amp; slack
                              </li>
                            </ul>
                            <div className="rbt-show-more-btn">Show More</div>
                          </div>
                        </div>
                      </div>
                      <div className="pricing-footer">
                        <a className="btn-default color-blacked" href="#">
                          Get Started
                        </a>
                        <p className="bottom-text">Limited Offer</p>
                      </div>
                    </div>
                    <div className="feature-badge">Best Offer</div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-12 mt--40">
                  <div className="rainbow-pricing style-aiwave">
                    <div className="pricing-table-inner">
                      <div className="pricing-top">
                        <div className="pricing-header">
                          <div className="icon">
                            <i className="fa-sharp fa-regular fa-waveform-lines" />
                          </div>
                          <h4 className="title color-var-three">Enterprise</h4>
                          <p className="subtitle">
                            For large teams &amp; corportaions
                          </p>
                          <div className="pricing">
                            <span className="price-text">$80.50</span>
                            <span className="text">/Per Month</span>
                          </div>
                        </div>
                        <div className="pricing-body">
                          <div className="features-section has-show-more">
                            <h6>Features</h6>
                            <ul className="list-style--1 has-show-more-inner-content">
                              <li>
                                <i className="fa-regular fa-circle-check" /> 15,700
                                15-30 day turnarouord
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" /> 6+
                                Naive development
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" /> 5+ Task
                                delivered one-by-one
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" /> 7,700
                                3-5 day turnarouord
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" /> 6+
                                Naive development
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" /> 5+ Task
                                delivered one-by-one
                              </li>
                              <li>
                                <i className="fa-sharp fa-regular fa-minus-circle" />{" "}
                                AI Blog Updates via dashboard &amp; slack
                              </li>
                              <li>
                                <i className="fa-sharp fa-regular fa-minus-circle" />{" "}
                                Advance Updates via dashboard &amp; slack
                              </li>
                            </ul>
                            <div className="rbt-show-more-btn">Show More</div>
                          </div>
                        </div>
                      </div>
                      <div className="pricing-footer">
                        <a className="btn-default btn-border" href="#">
                          Get Started
                        </a>
                        <p className="bottom-text">Limited Offer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade active show"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <div className="row row--15 mt_dec--40">
                <div className="col-xl-4 col-lg-6 col-md-6 col-12 mt--40">
                  <div className="rainbow-pricing style-aiwave">
                    <div className="pricing-table-inner">
                      <div className="pricing-top">
                        <div className="pricing-header">
                          <div className="icon">
                            <i className="fa-regular fa-circle-radiation" />
                          </div>
                          <h4 className="title color-var-one">Basic</h4>
                          <p className="subtitle">
                            For large teams &amp; corportaions
                          </p>
                          <div className="pricing">
                            <span className="price-text">Free</span>
                          </div>
                        </div>
                        <div className="pricing-body">
                          <div className="features-section">
                            <h6>Features</h6>
                            <ul className="list-style--1">
                              <li>
                                <i className="fa-regular fa-circle-check" /> 7,700
                                3-5 day turnarouord
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" /> 6+
                                Naive development
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" /> 5+ Task
                                delivered one-by-one
                              </li>
                              <li>
                                <i className="fa-sharp fa-regular fa-minus-circle" />{" "}
                                AI Blog Updates via dashboard &amp; slack
                              </li>
                              <li>
                                <i className="fa-sharp fa-regular fa-minus-circle" />{" "}
                                Advance Updates via dashboard &amp; slack
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="pricing-footer">
                        <a className="btn-default btn-border" href="#">
                          Get Started
                        </a>
                        <p className="bottom-text">Limited Offer</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-12 mt--40">
                  <div className="rainbow-pricing style-aiwave active">
                    <div className="pricing-table-inner">
                      <div className="pricing-top">
                        <div className="pricing-header">
                          <div className="icon">
                            <i className="fa-sharp fa-regular fa-flower" />
                          </div>
                          <h4 className="title color-var-two">Premium</h4>
                          <p className="subtitle">
                            For large teams &amp; corportaions
                          </p>
                          <div className="pricing">
                            <span className="price-text">$499.00</span>
                            <span className="text">/Per Year</span>
                          </div>
                        </div>
                        <div className="pricing-body">
                          <div className="features-section has-show-more">
                            <h6>Features</h6>
                            <ul className="list-style--1 has-show-more-inner-content">
                              <li>
                                <i className="fa-regular fa-circle-check" /> 12,700
                                7-9 day turnarouord
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" /> 6+
                                Naive development
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" /> 5+ Task
                                delivered one-by-one
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" /> 7,700
                                3-5 day turnarouord
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" /> 6+
                                Naive development
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" /> 5+ Task
                                delivered one-by-one
                              </li>
                              <li>
                                <i className="fa-sharp fa-regular fa-minus-circle" />{" "}
                                AI Blog Updates via dashboard &amp; slack
                              </li>
                              <li>
                                <i className="fa-sharp fa-regular fa-minus-circle" />{" "}
                                Advance Updates via dashboard &amp; slack
                              </li>
                            </ul>
                            <div className="rbt-show-more-btn">Show More</div>
                          </div>
                        </div>
                      </div>
                      <div className="pricing-footer">
                        <a className="btn-default color-blacked" href="#">
                          Get Started
                        </a>
                        <p className="bottom-text">Limited Offer</p>
                      </div>
                    </div>
                    <div className="feature-badge">Best Offer</div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-12 mt--40">
                  <div className="rainbow-pricing style-aiwave">
                    <div className="pricing-table-inner">
                      <div className="pricing-top">
                        <div className="pricing-header">
                          <div className="icon">
                            <i className="fa-sharp fa-regular fa-waveform-lines" />
                          </div>
                          <h4 className="title color-var-three">Enterprise</h4>
                          <p className="subtitle">
                            For large teams &amp; corportaions
                          </p>
                          <div className="pricing">
                            <span className="price-text">$599.00</span>
                            <span className="text">/Per Year</span>
                          </div>
                        </div>
                        <div className="pricing-body">
                          <div className="features-section has-show-more">
                            <h6>Features</h6>
                            <ul className="list-style--1 has-show-more-inner-content">
                              <li>
                                <i className="fa-regular fa-circle-check" /> 15,700
                                15-30 day turnarouord
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" /> 6+
                                Naive development
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" /> 5+ Task
                                delivered one-by-one
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" /> 7,700
                                3-5 day turnarouord
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" /> 6+
                                Naive development
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check" /> 5+ Task
                                delivered one-by-one
                              </li>
                              <li>
                                <i className="fa-sharp fa-regular fa-minus-circle" />{" "}
                                AI Blog Updates via dashboard &amp; slack
                              </li>
                              <li>
                                <i className="fa-sharp fa-regular fa-minus-circle" />{" "}
                                Advance Updates via dashboard &amp; slack
                              </li>
                            </ul>
                            <div className="rbt-show-more-btn">Show More</div>
                          </div>
                        </div>
                      </div>
                      <div className="pricing-footer">
                        <a className="btn-default btn-border" href="#">
                          Get Started
                        </a>
                        <p className="bottom-text">Limited Offer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*..:: Service Area ::..*/}
      <div className="aiwave-service-area rainbow-section-gap">
        <div className="container">
          <div className="row row--15 service-wrapper">
            <div
              className="col-lg-4 col-md-6 col-sm-6 col-12 sal-animate"
              data-sal="slide-up"
              data-sal-duration={700}
            >
              <div className="service service__style--1 aiwave-style text-center">
                <div className="icon">
                  <img
                    src="assets/images/service/service-icon-01.png"
                    alt="Servece Image"
                  />
                </div>
                <div className="content">
                  <h4 className="title w-600">
                    100% No-Risk, Money Back Guarantee!
                  </h4>
                  <p className="description b1 mb--0">
                    Refunds will be issued within period of 14 days from the
                    purchase date
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6 col-12 sal-animate"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={100}
            >
              <div className="service service__style--1 aiwave-style text-center">
                <div className="icon">
                  <img
                    src="assets/images/service/service-icon-02.png"
                    alt="Servece Image"
                  />
                </div>
                <div className="content">
                  <h4 className="title w-600">Upgrade or Cancel Anytime</h4>
                  <p className="description b1 mb--0">
                    Passages there are many variations variations of of Lorem Ipsum
                    available.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6 col-12 sal-animate"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={200}
            >
              <div className="service service__style--1 aiwave-style text-center">
                <div className="icon">
                  <img
                    src="assets/images/service/service-icon-03.png"
                    alt="Servece Image"
                  />
                </div>
                <div className="content">
                  <h4 className="title w-600">
                    Not sure yet, try the free version
                  </h4>
                  <p className="description b1 mb--0">
                    Refunds will be issued within period of 14 days from the
                    purchase date
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*..:: Start Testimonial Area  ::..*/}
      <div className="rainbow-testimonial-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-left"
                data-sal="slide-up"
                data-sal-duration={400}
                data-sal-delay={150}
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Assisting individuals</span>
                </h4>
                <h2 className="title mb--60">The opinions of the community</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="service-wrapper rainbow-service-slider-actvation slick-grid-15 rainbow-slick-dot rainbow-gradient-arrows">
                <div className="slide-single-layout">
                  <div className="rainbow-box-card active card-style-default testimonial-style-defalt has-bg-shaped">
                    <div className="inner">
                      <div className="rating">
                        <a href="#rating">
                          <i className="fa-sharp fa-solid fa-star" />
                        </a>
                        <a href="#rating">
                          <i className="fa-sharp fa-solid fa-star" />
                        </a>
                        <a href="#rating">
                          <i className="fa-sharp fa-solid fa-star" />
                        </a>
                        <a href="#rating">
                          <i className="fa-sharp fa-solid fa-star" />
                        </a>
                        <a href="#rating">
                          <i className="fa-sharp fa-solid fa-star" />
                        </a>
                      </div>
                      <div className="content">
                        <p className="description">
                          Pixcels-Themes has become such an integral part of our
                          work! By putting our
                        </p>
                        <div className="bottom-content">
                          <div className="meta-info-section">
                            <p className="title-text">Guy Hawkins</p>
                            <p className="desc">Nursing Assistant</p>
                            <div className="desc-img">
                              <img
                                src="assets/images/brand/brand-t.png"
                                alt="Brand Image"
                              />
                            </div>
                          </div>
                          <div className="meta-img-section">
                            <a
                              className="btn-default rounded-player style-two xs-size popup-video"
                              href="https://www.youtube.com/watch?v=ikEdN260zRg"
                            >
                              <span>
                                <i className="fa-duotone fa-play" />
                              </span>
                            </a>
                            <a className="image" href="#">
                              <img src="assets/images/team/team-02sm.jpg" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-shape">
                      <img
                        src="assets/images/service/bg-testimonial.png"
                        alt=""
                        className="bg"
                      />
                      <img
                        src="assets/images/service/bg-testimonial-hover.png"
                        alt=""
                        className="bg-hover"
                      />
                    </div>
                  </div>
                </div>
                <div className="slide-single-layout">
                  <div className="rainbow-box-card card-style-default testimonial-style-defalt has-bg-shaped">
                    <div className="inner">
                      <div className="rating">
                        <a href="#rating">
                          <i className="fa-sharp fa-solid fa-star" />
                        </a>
                        <a href="#rating">
                          <i className="fa-sharp fa-solid fa-star" />
                        </a>
                        <a href="#rating">
                          <i className="fa-sharp fa-solid fa-star" />
                        </a>
                        <a href="#rating">
                          <i className="fa-sharp fa-solid fa-star" />
                        </a>
                        <a href="#rating">
                          <i className="fa-sharp fa-solid fa-star" />
                        </a>
                      </div>
                      <div className="content">
                        <p className="description">
                          Pixcels-Themes has become such an integral part of our
                          work! By putting our
                        </p>
                        <div className="bottom-content">
                          <div className="meta-info-section">
                            <p className="title-text">Guy Hawkins</p>
                            <p className="desc">Nursing Assistant</p>
                            <div className="desc-img">
                              <img
                                src="assets/images/brand/brand-t.png"
                                alt="Brand Image"
                              />
                            </div>
                          </div>
                          <div className="meta-img-section">
                            <a
                              className="btn-default rounded-player style-two xs-size popup-video"
                              href="https://www.youtube.com/watch?v=ikEdN260zRg"
                            >
                              <span>
                                <i className="fa-duotone fa-play" />
                              </span>
                            </a>
                            <a className="image" href="#">
                              <img src="assets/images/team/team-02sm.jpg" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-shape">
                      <img
                        src="assets/images/service/bg-testimonial.png"
                        alt=""
                        className="bg"
                      />
                      <img
                        src="assets/images/service/bg-testimonial-hover.png"
                        alt=""
                        className="bg-hover"
                      />
                    </div>
                  </div>
                </div>
                <div className="slide-single-layout">
                  <div className="rainbow-box-card card-style-default testimonial-style-defalt has-bg-shaped">
                    <div className="inner">
                      <div className="rating">
                        <a href="#rating">
                          <i className="fa-sharp fa-solid fa-star" />
                        </a>
                        <a href="#rating">
                          <i className="fa-sharp fa-solid fa-star" />
                        </a>
                        <a href="#rating">
                          <i className="fa-sharp fa-solid fa-star" />
                        </a>
                        <a href="#rating">
                          <i className="fa-sharp fa-solid fa-star" />
                        </a>
                        <a href="#rating">
                          <i className="fa-sharp fa-solid fa-star" />
                        </a>
                      </div>
                      <div className="content">
                        <p className="description">
                          Pixcels-Themes has become such an integral part of our
                          work! By putting our
                        </p>
                        <div className="bottom-content">
                          <div className="meta-info-section">
                            <p className="title-text">Guy Hawkins</p>
                            <p className="desc">Nursing Assistant</p>
                            <div className="desc-img">
                              <img
                                src="assets/images/brand/brand-t.png"
                                alt="Brand Image"
                              />
                            </div>
                          </div>
                          <div className="meta-img-section">
                            <a
                              className="btn-default rounded-player style-two xs-size small-size popup-video"
                              href="https://www.youtube.com/watch?v=ikEdN260zRg"
                            >
                              <span>
                                <i className="fa-duotone fa-play" />
                              </span>
                            </a>
                            <a className="image" href="#">
                              <img src="assets/images/team/team-02sm.jpg" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-shape">
                      <img
                        src="assets/images/service/bg-testimonial.png"
                        alt=""
                        className="bg"
                      />
                      <img
                        src="assets/images/service/bg-testimonial-hover.png"
                        alt=""
                        className="bg-hover"
                      />
                    </div>
                  </div>
                </div>
                <div className="slide-single-layout">
                  <div className="rainbow-box-card active card-style-default testimonial-style-defalt has-bg-shaped">
                    <div className="inner">
                      <div className="rating">
                        <a href="#rating">
                          <i className="fa-sharp fa-solid fa-star" />
                        </a>
                        <a href="#rating">
                          <i className="fa-sharp fa-solid fa-star" />
                        </a>
                        <a href="#rating">
                          <i className="fa-sharp fa-solid fa-star" />
                        </a>
                        <a href="#rating">
                          <i className="fa-sharp fa-solid fa-star" />
                        </a>
                        <a href="#rating">
                          <i className="fa-sharp fa-solid fa-star" />
                        </a>
                      </div>
                      <div className="content">
                        <p className="description">
                          Pixcels-Themes has become such an integral part of our
                          work! By putting our
                        </p>
                        <div className="bottom-content">
                          <div className="meta-info-section">
                            <p className="title-text">Guy Hawkins</p>
                            <p className="desc">Nursing Assistant</p>
                            <div className="desc-img">
                              <img
                                src="assets/images/brand/brand-t.png"
                                alt="Brand Image"
                              />
                            </div>
                          </div>
                          <div className="meta-img-section">
                            <a
                              className="btn-default rounded-player style-two xs-size popup-video"
                              href="https://www.youtube.com/watch?v=ikEdN260zRg"
                            >
                              <span>
                                <i className="fa-duotone fa-play" />
                              </span>
                            </a>
                            <a className="image" href="#">
                              <img src="assets/images/team/team-02sm.jpg" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-shape">
                      <img
                        src="assets/images/service/bg-testimonial.png"
                        alt=""
                        className="bg"
                      />
                      <img
                        src="assets/images/service/bg-testimonial-hover.png"
                        alt=""
                        className="bg-hover"
                      />
                    </div>
                  </div>
                </div>
                <div className="slide-single-layout">
                  <div className="rainbow-box-card card-style-default testimonial-style-defalt has-bg-shaped">
                    <div className="inner">
                      <div className="rating">
                        <a href="#rating">
                          <i className="fa-sharp fa-solid fa-star" />
                        </a>
                        <a href="#rating">
                          <i className="fa-sharp fa-solid fa-star" />
                        </a>
                        <a href="#rating">
                          <i className="fa-sharp fa-solid fa-star" />
                        </a>
                        <a href="#rating">
                          <i className="fa-sharp fa-solid fa-star" />
                        </a>
                        <a href="#rating">
                          <i className="fa-sharp fa-solid fa-star" />
                        </a>
                      </div>
                      <div className="content">
                        <p className="description">
                          Pixcels-Themes has become such an integral part of our
                          work! By putting our
                        </p>
                        <div className="bottom-content">
                          <div className="meta-info-section">
                            <p className="title-text">Guy Hawkins</p>
                            <p className="desc">Nursing Assistant</p>
                            <div className="desc-img">
                              <img
                                src="assets/images/brand/brand-t.png"
                                alt="Brand Image"
                              />
                            </div>
                          </div>
                          <div className="meta-img-section">
                            <a
                              className="btn-default rounded-player style-two xs-size popup-video"
                              href="https://www.youtube.com/watch?v=ikEdN260zRg"
                            >
                              <span>
                                <i className="fa-duotone fa-play" />
                              </span>
                            </a>
                            <a className="image" href="#">
                              <img src="assets/images/team/team-02sm.jpg" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-shape">
                      <img
                        src="assets/images/service/bg-testimonial.png"
                        alt=""
                        className="bg"
                      />
                      <img
                        src="assets/images/service/bg-testimonial-hover.png"
                        alt=""
                        className="bg-hover"
                      />
                    </div>
                  </div>
                </div>
                <div className="slide-single-layout">
                  <div className="rainbow-box-card card-style-default testimonial-style-defalt has-bg-shaped">
                    <div className="inner">
                      <div className="rating">
                        <a href="#rating">
                          <i className="fa-sharp fa-solid fa-star" />
                        </a>
                        <a href="#rating">
                          <i className="fa-sharp fa-solid fa-star" />
                        </a>
                        <a href="#rating">
                          <i className="fa-sharp fa-solid fa-star" />
                        </a>
                        <a href="#rating">
                          <i className="fa-sharp fa-solid fa-star" />
                        </a>
                        <a href="#rating">
                          <i className="fa-sharp fa-solid fa-star" />
                        </a>
                      </div>
                      <div className="content">
                        <p className="description">
                          Pixcels-Themes has become such an integral part of our
                          work! By putting our
                        </p>
                        <div className="bottom-content">
                          <div className="meta-info-section">
                            <p className="title-text">Guy Hawkins</p>
                            <p className="desc">Nursing Assistant</p>
                            <div className="desc-img">
                              <img
                                src="assets/images/brand/brand-t.png"
                                alt="Brand Image"
                              />
                            </div>
                          </div>
                          <div className="meta-img-section">
                            <a
                              className="btn-default rounded-player style-two xs-size small-size popup-video"
                              href="https://www.youtube.com/watch?v=ikEdN260zRg"
                            >
                              <span>
                                <i className="fa-duotone fa-play" />
                              </span>
                            </a>
                            <a className="image" href="#">
                              <img src="assets/images/team/team-02sm.jpg" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-shape">
                      <img
                        src="assets/images/service/bg-testimonial.png"
                        alt=""
                        className="bg"
                      />
                      <img
                        src="assets/images/service/bg-testimonial-hover.png"
                        alt=""
                        className="bg-hover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*..:: End Testimonial Area  ::..*/}
      {/*..:: Start Brand Area ::..*/}
      <div className="rainbow-brand-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title rating-title text-center sal-animate"
                data-sal="slide-up"
                data-sal-duration={700}
                data-sal-delay={100}
              >
                <div className="rating">
                  <a href="#rating">
                    <i className="fa-sharp fa-solid fa-star" />
                  </a>
                  <a href="#rating">
                    <i className="fa-sharp fa-solid fa-star" />
                  </a>
                  <a href="#rating">
                    <i className="fa-sharp fa-solid fa-star" />
                  </a>
                  <a href="#rating">
                    <i className="fa-sharp fa-solid fa-star" />
                  </a>
                  <a href="#rating">
                    <i className="fa-sharp fa-solid fa-star" />
                  </a>
                </div>
                <p className="subtitle mb--0">Based on 20,000+ reviews on</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mt--10">
              <ul className="brand-list brand-style-2">
                <li>
                  <a href="#">
                    <img src="assets/images/brand/brand-01.png" alt="Brand Image" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="assets/images/brand/brand-02.png" alt="Brand Image" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="assets/images/brand/brand-03.png" alt="Brand Image" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="assets/images/brand/brand-04.png" alt="Brand Image" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-shape-left">
          <img src="assets/images/bg/bg-shape-two.png" alt="Bg shape" />
        </div>
      </div>
      {/*..:: Start CTA Area ::..*/}
      <div className="rainbow-cta-area rainbow-section-gap rainbow-section-gapBottom-big">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="aiwave-cta">
                <div className="inner">
                  <div className="content-left">
                    <div
                      className="section-title text-left"
                      data-sal="slide-up"
                      data-sal-duration={400}
                      data-sal-delay={150}
                    >
                      <h4 className="subtitle">
                        <span className="theme-gradient">Coming Soon!</span>
                      </h4>
                      <h2 className="title w-600 mb--20">
                        Nexus Filehub Mobile App
                      </h2>
                      <p className="description b1">
                        Get ready for our mobile app! Soon, you&apos;ll securely upload,
                        share, and
                        <br />
                        manage your files right from your smartphone. Stay Updated!
                      </p>
                    </div>
                    <div className="app-store-btn">
                      <a className="store-btn" href="#">
                        <Image
                          src="/assets/images/cta-img/play-app.png"
                          alt="Play Store Button"
                          width={157.29}
                          height={54.99}
                        />
                      </a>
                      <a className="store-btn" href="#">
                        <Image
                          src="/assets/images/cta-img/apple-app.png"
                          alt="Apple Store Button"
                          width={157.29}
                          height={54.99}
                        />
                      </a>
                    </div>
                  </div>
                  <div className="content-right">
                    <div className="img-right">
                      <Image
                        src="/assets/images/cta-img/view-img.png"
                        alt="Mobile View"
                        width={450}
                        height={500}
                      />
                    </div>
                  </div>
                  <div className="bg-shape-one">
                    <img src="assets/images/cta-img/bg-shape.png" alt="Bg shape" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;

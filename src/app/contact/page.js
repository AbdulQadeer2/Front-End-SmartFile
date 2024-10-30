import React from 'react';

const contact = () => {
    return (
        <>
            <main className="page-wrapper">
                {/*..:: Start Breadcrumb Area  ::..*/}
                <div className="main-content">
                    {/*..:: Start Breadcarumb area  ::..*/}
                    <div className="breadcrumb-area breadcarumb-style-1 pt--180 pb--100">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="breadcrumb-inner text-center">
                                        <h3 className="title h3">Contact Us</h3>
                                        <ul className="page-list">
                                            <li className="rainbow-breadcrumb-item">
                                                <a href="index.php">Home</a>
                                            </li>
                                            <li className="rainbow-breadcrumb-item active">Contact</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*..:: End Breadcarumb area  ::..*/}
                </div>
                {/*..:: Start Contact Area  ::..*/}
                <div className="main-content">
                    <div className="rainbow-contact-area rainbow-section-gapTop-big">
                        <div className="container">
                            <div className="row mt--40 row--15">
                                <div className="col-lg-8">
                                    <div className="contact-details-box">
                                        <h3 className="title">Get Started with a free quotation</h3>
                                        <div className="profile-details-tab">
                                            {/*..:: Start Contact Row  ::..*/}
                                            <form
                                                action="#"
                                                className="rbt-profile-row rbt-default-form row row--15"
                                            >
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                                    <div className="form-group">
                                                        <label htmlFor="firstname">Name</label>
                                                        <input id="firstname" type="text" placeholder="Trent" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                                    <div className="form-group">
                                                        <label htmlFor="lastname">Email</label>
                                                        <input
                                                            id="lastname"
                                                            type="email"
                                                            placeholder="example.adam@gmail.com"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                                    <div className="form-group">
                                                        <label htmlFor="username">Subject</label>
                                                        <input
                                                            id="username"
                                                            type="text"
                                                            placeholder="Subject"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                                    <div className="form-group">
                                                        <label htmlFor="phonenumber">Phone Number</label>
                                                        <input
                                                            id="phonenumber"
                                                            type="tel"
                                                            placeholder="+1-202-555-0174"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label htmlFor="bio">Your message</label>
                                                        <textarea
                                                            id="bio"
                                                            cols={20}
                                                            rows={5}
                                                            placeholder="Your message"
                                                            defaultValue={""}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 mt--20">
                                                    <div className="form-group mb--0">
                                                        <a className="btn-default" href="#">
                                                            Send message
                                                        </a>
                                                    </div>
                                                </div>
                                            </form>
                                            {/*..:: End Contact Row  ::..*/}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 mt_md--30 mt_sm--30">
                                    <div className="rainbow-address">
                                        <div className="icon">
                                            <i className="fa-sharp fa-regular fa-location-dot" />
                                        </div>
                                        <div className="inner">
                                            <h4 className="title">Location</h4>
                                            <p className="b2">
                                                100 avenue of the moon, 12 new <br /> York, ny 1001B US.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="rainbow-address">
                                        <div className="icon">
                                            <i className="fa-sharp fa-solid fa-headphones" />
                                        </div>
                                        <div className="inner">
                                            <h4 className="title">Contact Number</h4>
                                            <p className="b2">
                                                <a href="#">+444 555 666 777</a>
                                            </p>
                                            <p className="b2">
                                                <a href="#">+222 222 222 333</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="rainbow-address">
                                        <div className="icon">
                                            <i className="fa-sharp fa-regular fa-envelope" />
                                        </div>
                                        <div className="inner">
                                            <h4 className="title">Our Email Address</h4>
                                            <p className="b2">
                                                <a href="mailto:admin@gmail.com">admin@gmail.com</a>
                                            </p>
                                            <p className="b2">
                                                <a href="mailto:example@gmail.com">example@gmail.com</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*..:: Start CTA Area ::..*/}
                    <div className="rainbow-cta-area rainbow-section-gap-big">
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
                                                        <span className="theme-gradient">customer saying</span>
                                                    </h4>
                                                    <h2 className="title w-600 mb--20">
                                                        The opinions of the community
                                                    </h2>
                                                    <p className="description b1">
                                                        Collaborate with AI to generate content that resonates.
                                                    </p>
                                                </div>
                                                <div className="app-store-btn">
                                                    <a className="store-btn" href="#">
                                                        <img
                                                            src="assets/images/cta-img/play-app.png"
                                                            alt="Play Store Button"
                                                        />
                                                    </a>
                                                    <a className="store-btn" href="#">
                                                        <img
                                                            src="assets/images/cta-img/apple-app.png"
                                                            alt="Apple Store Button"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="content-right">
                                                <div className="img-right">
                                                    <img
                                                        src="assets/images/cta-img/view-img.png"
                                                        alt="Mobile View"
                                                    />
                                                </div>
                                            </div>
                                            <div className="bg-shape-one">
                                                <img
                                                    src="assets/images/cta-img/bg-shape.png"
                                                    alt="Bg shape"
                                                />
                                            </div>
                                        </div>
                                        <div className="bg-shape-inside">
                                            <img
                                                src="assets/images/bg/bg-shape-tree.png"
                                                alt="Bg shape"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>

    );
};

export default contact;
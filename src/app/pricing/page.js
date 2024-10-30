import React from 'react';

const pricing = () => {
    return (
        <>
            <main className="page-wrapper">
                <div className="main-content">
                    {/*..:: Start Breadcarumb area  ::..*/}
                    <div className="breadcrumb-area breadcarumb-style-1 pt--180 pb--100">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="breadcrumb-inner text-center">
                                        <h3 className="title h3">Pricing Plans For Everyone</h3>
                                        <ul className="page-list">
                                            <li className="rainbow-breadcrumb-item">
                                                <a href="index.php">Home</a>
                                            </li>
                                            <li className="rainbow-breadcrumb-item active">Pricing</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*..:: End Breadcarumb area  ::..*/}
                    {/*..:: Start Pricing Style-2  ::..*/}
                    <div className="rainbow-pricing-area rainbow-section-gap">
                        <div className="container-fluid">
                            {/*..:: Pricing Part ::..*/}
                            <div className="wrapper rainbow-section-gap">
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
                                                <h2 className="title w-600 mb--20">
                                                    Commence Content Journey with AI
                                                </h2>
                                                <p className="description b1">
                                                    Collaborate with AI to generate content that resonates.
                                                </p>
                                            </div>
                                            <nav className="aiwave-tab">
                                                <div
                                                    className="tab-btn-grp nav nav-tabs mb-3 text-center justify-content-center"
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
                                                        <span className="rainbow-badge-card badge-border">
                                                            20% Off
                                                        </span>
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
                                            <div className="row row--15">
                                                <div className="col-xl-4 col-lg-6 col-md-6 col-12 mt--30">
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
                                                                                <i className="fa-regular fa-circle-check" />{" "}
                                                                                7,700 3-5 day turnarouord
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa-regular fa-circle-check" />{" "}
                                                                                6+ Naive development
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa-regular fa-circle-check" />{" "}
                                                                                5+ Task delivered one-by-one
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
                                                <div className="col-xl-4 col-lg-6 col-md-6 col-12 mt--30">
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
                                                                                <i className="fa-regular fa-circle-check" />{" "}
                                                                                12,700 7-9 day turnarouord
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa-regular fa-circle-check" />{" "}
                                                                                6+ Naive development
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa-regular fa-circle-check" />{" "}
                                                                                5+ Task delivered one-by-one
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa-regular fa-circle-check" />{" "}
                                                                                7,700 3-5 day turnarouord
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa-regular fa-circle-check" />{" "}
                                                                                6+ Naive development
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa-regular fa-circle-check" />{" "}
                                                                                5+ Task delivered one-by-one
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
                                                                        <div className="rbt-show-more-btn">
                                                                            Show More
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="pricing-footer">
                                                                <a className="btn-default" href="#">
                                                                    Get Started
                                                                </a>
                                                                <p className="bottom-text">Limited Offer</p>
                                                            </div>
                                                        </div>
                                                        <div className="feature-badge">Best Offer</div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-lg-6 col-md-6 col-12 mt--30">
                                                    <div className="rainbow-pricing style-aiwave">
                                                        <div className="pricing-table-inner">
                                                            <div className="pricing-top">
                                                                <div className="pricing-header">
                                                                    <div className="icon">
                                                                        <i className="fa-sharp fa-regular fa-waveform-lines" />
                                                                    </div>
                                                                    <h4 className="title color-var-three">
                                                                        Enterprise
                                                                    </h4>
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
                                                                                <i className="fa-regular fa-circle-check" />{" "}
                                                                                15,700 15-30 day turnarouord
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa-regular fa-circle-check" />{" "}
                                                                                6+ Naive development
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa-regular fa-circle-check" />{" "}
                                                                                5+ Task delivered one-by-one
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa-regular fa-circle-check" />{" "}
                                                                                7,700 3-5 day turnarouord
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa-regular fa-circle-check" />{" "}
                                                                                6+ Naive development
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa-regular fa-circle-check" />{" "}
                                                                                5+ Task delivered one-by-one
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
                                                                        <div className="rbt-show-more-btn">
                                                                            Show More
                                                                        </div>
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
                                            <div className="row row--15">
                                                <div className="col-xl-4 col-lg-6 col-md-6 col-12 mt--30">
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
                                                                                <i className="fa-regular fa-circle-check" />{" "}
                                                                                7,700 3-5 day turnarouord
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa-regular fa-circle-check" />{" "}
                                                                                6+ Naive development
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa-regular fa-circle-check" />{" "}
                                                                                5+ Task delivered one-by-one
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
                                                <div className="col-xl-4 col-lg-6 col-md-6 col-12 mt--30">
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
                                                                                <i className="fa-regular fa-circle-check" />{" "}
                                                                                12,700 7-9 day turnarouord
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa-regular fa-circle-check" />{" "}
                                                                                6+ Naive development
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa-regular fa-circle-check" />{" "}
                                                                                5+ Task delivered one-by-one
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa-regular fa-circle-check" />{" "}
                                                                                7,700 3-5 day turnarouord
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa-regular fa-circle-check" />{" "}
                                                                                6+ Naive development
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa-regular fa-circle-check" />{" "}
                                                                                5+ Task delivered one-by-one
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
                                                                        <div className="rbt-show-more-btn">
                                                                            Show More
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="pricing-footer">
                                                                <a className="btn-default" href="#">
                                                                    Get Started
                                                                </a>
                                                                <p className="bottom-text">Limited Offer</p>
                                                            </div>
                                                        </div>
                                                        <div className="feature-badge">Best Offer</div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-lg-6 col-md-6 col-12 mt--30">
                                                    <div className="rainbow-pricing style-aiwave">
                                                        <div className="pricing-table-inner">
                                                            <div className="pricing-top">
                                                                <div className="pricing-header">
                                                                    <div className="icon">
                                                                        <i className="fa-sharp fa-regular fa-waveform-lines" />
                                                                    </div>
                                                                    <h4 className="title color-var-three">
                                                                        Enterprise
                                                                    </h4>
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
                                                                                <i className="fa-regular fa-circle-check" />{" "}
                                                                                15,700 15-30 day turnarouord
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa-regular fa-circle-check" />{" "}
                                                                                6+ Naive development
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa-regular fa-circle-check" />{" "}
                                                                                5+ Task delivered one-by-one
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa-regular fa-circle-check" />{" "}
                                                                                7,700 3-5 day turnarouord
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa-regular fa-circle-check" />{" "}
                                                                                6+ Naive development
                                                                            </li>
                                                                            <li>
                                                                                <i className="fa-regular fa-circle-check" />{" "}
                                                                                5+ Task delivered one-by-one
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
                                                                        <div className="rbt-show-more-btn">
                                                                            Show More
                                                                        </div>
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
                                                <p className="subtitle mb--0">
                                                    Based on 20,000+ reviews on
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 mt--10">
                                            <ul className="brand-list brand-style-2">
                                                <li>
                                                    <a href="#">
                                                        <img
                                                            src="assets/images/brand/brand-01.png"
                                                            alt="Brand Image"
                                                        />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img
                                                            src="assets/images/brand/brand-02.png"
                                                            alt="Brand Image"
                                                        />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img
                                                            src="assets/images/brand/brand-03.png"
                                                            alt="Brand Image"
                                                        />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img
                                                            src="assets/images/brand/brand-04.png"
                                                            alt="Brand Image"
                                                        />
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
                            {/*..:: Start Pricing Compare Detailed  ::..*/}
                            <div className="rainbow-pricing-detailed-area rainbow-section-gap">
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
                                                    <span className="theme-gradient">Price compare</span>
                                                </h4>
                                                <h2 className="title w-600 mb--20">
                                                    Compare plans &amp; features
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row row--15">
                                        <div className="col-lg-12">
                                            <div className="rainbow-compare-table style-1">
                                                <table className="table-responsive">
                                                    <thead>
                                                        <tr>
                                                            <th />
                                                            <th className="sm-radius-top-left">Free</th>
                                                            <th className="style-prymary">Creator</th>
                                                            <th className="style-prymary">Business</th>
                                                            <th className="style-prymary sm-radius-top-right">
                                                                Enterprise
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="heading-row">
                                                            <td>
                                                                <h6>Price &amp; Credits</h6>
                                                            </td>
                                                            <td>
                                                                <h6>Price &amp; Credits</h6>
                                                            </td>
                                                            <td>
                                                                <h6>Price &amp; Credits</h6>
                                                            </td>
                                                            <td>
                                                                <h6>Price &amp; Credits</h6>
                                                            </td>
                                                            <td>
                                                                <h6>Price &amp; Credits</h6>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Photo Avatar</td>
                                                            <td>Unlimited</td>
                                                            <td>Unlimited</td>
                                                            <td>Unlimited</td>
                                                            <td>Unlimited</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Instant Avatar</td>
                                                            <td>Paid Add-On</td>
                                                            <td>Paid Add-On</td>
                                                            <td>Paid Add-On</td>
                                                            <td>Customizable</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Unit Price</td>
                                                            <td>Free</td>
                                                            <td>$2 / Credit Monthly</td>
                                                            <td>$3 / Credit Monthly</td>
                                                            <td>Customizable</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Credit Plans</td>
                                                            <td>1 Credit</td>
                                                            <td>15, 30, 60, 90, 120 / Month</td>
                                                            <td>30, 60, 120, 180, 300 / Month</td>
                                                            <td>Customizable</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Switch/Cancel Anytime</td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                            <td>Customizable</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Unit Price</td>
                                                            <td>Free</td>
                                                            <td>$2 / Credit Monthly</td>
                                                            <td>$3 / Credit Monthly</td>
                                                            <td>Customizable</td>
                                                        </tr>
                                                        <tr className="heading-row">
                                                            <td>
                                                                <h6>Avatars</h6>
                                                            </td>
                                                            <td>
                                                                <h6>Avatars</h6>
                                                            </td>
                                                            <td>
                                                                <h6>Avatars</h6>
                                                            </td>
                                                            <td>
                                                                <h6>Avatars</h6>
                                                            </td>
                                                            <td>
                                                                <h6>Avatars</h6>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Public Avatars</td>
                                                            <td>Free</td>
                                                            <td>100+ Premium Avatars</td>
                                                            <td>100+ Premium Avatars</td>
                                                            <td>100+ Premium Avatars</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Photo Avatar</td>
                                                            <td>Unlimited</td>
                                                            <td>Unlimited</td>
                                                            <td>Unlimited</td>
                                                            <td>Unlimited</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Instant Avatar</td>
                                                            <td>Paid Add-On</td>
                                                            <td>Paid Add-On</td>
                                                            <td>Paid Add-On</td>
                                                            <td>Customizable</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Studio Avatar</td>
                                                            <td>
                                                                <span className="icon bg-dark">
                                                                    <i className="fa-sharp fa-solid fa-xmark" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon bg-dark">
                                                                    <i className="fa-sharp fa-solid fa-xmark" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon bg-dark">
                                                                    <i className="fa-sharp fa-solid fa-xmark" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr className="heading-row">
                                                            <td>
                                                                <h6>All Features</h6>
                                                            </td>
                                                            <td>
                                                                <h6>All Features</h6>
                                                            </td>
                                                            <td>
                                                                <h6>All Features</h6>
                                                            </td>
                                                            <td>
                                                                <h6>All Features</h6>
                                                            </td>
                                                            <td>
                                                                <h6>All Features</h6>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Avatar FaceSwap</td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Photo Avatar Generation</td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Text2Image</td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>GPT4 Script Writer</td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>AI Matting</td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>URL To Video</td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr className="heading-row">
                                                            <td>
                                                                <h6>Team Collaboration</h6>
                                                            </td>
                                                            <td>
                                                                <h6>Team Collaboration</h6>
                                                            </td>
                                                            <td>
                                                                <h6>Team Collaboration</h6>
                                                            </td>
                                                            <td>
                                                                <h6>Team Collaboration</h6>
                                                            </td>
                                                            <td>
                                                                <h6>Team Collaboration</h6>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Space Seats</td>
                                                            <td>2 Seats</td>
                                                            <td>3 Seats</td>
                                                            <td>5 Seats</td>
                                                            <td>Customizable</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Credit Control</td>
                                                            <td>
                                                                <span className="icon bg-dark">
                                                                    <i className="fa-sharp fa-solid fa-xmark" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon bg-dark">
                                                                    <i className="fa-sharp fa-solid fa-xmark" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Role Control</td>
                                                            <td>
                                                                <span className="icon bg-dark">
                                                                    <i className="fa-sharp fa-solid fa-xmark" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon bg-dark">
                                                                    <i className="fa-sharp fa-solid fa-xmark" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Usage Report</td>
                                                            <td>
                                                                <span className="icon bg-dark">
                                                                    <i className="fa-sharp fa-solid fa-xmark" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon bg-dark">
                                                                    <i className="fa-sharp fa-solid fa-xmark" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Brand Kit</td>
                                                            <td>
                                                                <span className="icon bg-dark">
                                                                    <i className="fa-sharp fa-solid fa-xmark" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon bg-dark">
                                                                    <i className="fa-sharp fa-solid fa-xmark" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Access Control</td>
                                                            <td>
                                                                <span className="icon bg-dark">
                                                                    <i className="fa-sharp fa-solid fa-xmark" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon bg-dark">
                                                                    <i className="fa-sharp fa-solid fa-xmark" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>SSO</td>
                                                            <td>
                                                                <span className="icon bg-dark">
                                                                    <i className="fa-sharp fa-solid fa-xmark" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon bg-dark">
                                                                    <i className="fa-sharp fa-solid fa-xmark" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon bg-dark">
                                                                    <i className="fa-sharp fa-solid fa-xmark" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr className="heading-row">
                                                            <td>
                                                                <h6>Video Creation</h6>
                                                            </td>
                                                            <td>
                                                                <h6>Video Creation</h6>
                                                            </td>
                                                            <td>
                                                                <h6>Video Creation</h6>
                                                            </td>
                                                            <td>
                                                                <h6>Video Creation</h6>
                                                            </td>
                                                            <td>
                                                                <h6>Video Creation</h6>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Audio Input</td>
                                                            <td>
                                                                <span className="icon bg-dark">
                                                                    <i className="fa-sharp fa-solid fa-xmark" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon bg-dark">
                                                                    <i className="fa-sharp fa-solid fa-xmark" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Video Duration</td>
                                                            <td>1-Min Max Duration</td>
                                                            <td>5-Min Max Duration</td>
                                                            <td>20-Min Max Duration</td>
                                                            <td>60-Min Max Duration</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Video Templates</td>
                                                            <td>400+</td>
                                                            <td>400+</td>
                                                            <td>400+</td>
                                                            <td>400+</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Stock Elements</td>
                                                            <td>
                                                                <span className="icon bg-dark">
                                                                    <i className="fa-sharp fa-solid fa-xmark" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon bg-dark">
                                                                    <i className="fa-sharp fa-solid fa-xmark" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Audio Recording</td>
                                                            <td>
                                                                <span className="icon bg-dark">
                                                                    <i className="fa-sharp fa-solid fa-xmark" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon bg-dark">
                                                                    <i className="fa-sharp fa-solid fa-xmark" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Import PPT/PDF</td>
                                                            <td>
                                                                <span className="icon bg-dark">
                                                                    <i className="fa-sharp fa-solid fa-xmark" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon bg-dark">
                                                                    <i className="fa-sharp fa-solid fa-xmark" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Image/Video Background</td>
                                                            <td>
                                                                <span className="icon bg-dark">
                                                                    <i className="fa-sharp fa-solid fa-xmark" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon bg-dark">
                                                                    <i className="fa-sharp fa-solid fa-xmark" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Background Music</td>
                                                            <td>
                                                                <span className="icon bg-dark">
                                                                    <i className="fa-sharp fa-solid fa-xmark" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon bg-dark">
                                                                    <i className="fa-sharp fa-solid fa-xmark" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Stock Library</td>
                                                            <td>
                                                                <span className="icon bg-dark">
                                                                    <i className="fa-sharp fa-solid fa-xmark" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon bg-dark">
                                                                    <i className="fa-sharp fa-solid fa-xmark" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Video Animation</td>
                                                            <td>
                                                                <span className="icon bg-dark">
                                                                    <i className="fa-sharp fa-solid fa-xmark" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon bg-dark">
                                                                    <i className="fa-sharp fa-solid fa-xmark" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>1080P Export</td>
                                                            <td>
                                                                <span className="icon bg-dark">
                                                                    <i className="fa-sharp fa-solid fa-xmark" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon bg-dark">
                                                                    <i className="fa-sharp fa-solid fa-xmark" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Audio Input</td>
                                                            <td>
                                                                <span className="icon bg-dark">
                                                                    <i className="fa-sharp fa-solid fa-xmark" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon bg-dark">
                                                                    <i className="fa-sharp fa-solid fa-xmark" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Priority Process</td>
                                                            <td>
                                                                <span className="icon bg-dark">
                                                                    <i className="fa-sharp fa-solid fa-xmark" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon bg-dark">
                                                                    <i className="fa-sharp fa-solid fa-xmark" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>API Integration</td>
                                                            <td>
                                                                <span className="icon bg-dark">
                                                                    <i className="fa-sharp fa-solid fa-xmark" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon bg-dark">
                                                                    <i className="fa-sharp fa-solid fa-xmark" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>4K Export</td>
                                                            <td>
                                                                <span className="icon bg-dark">
                                                                    <i className="fa-sharp fa-solid fa-xmark" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon bg-dark">
                                                                    <i className="fa-sharp fa-solid fa-xmark" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Auto Captions</td>
                                                            <td>
                                                                <span className="icon bg-dark">
                                                                    <i className="fa-sharp fa-solid fa-xmark" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon bg-dark">
                                                                    <i className="fa-sharp fa-solid fa-xmark" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="icon">
                                                                    <i className="fa-sharp fa-solid fa-check" />
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*..:: Start Testimonial Area ::..*/}
                            <div className="rainbow-testimonial-area rainbow-section-gap">
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
                                                    <span className="theme-gradient">customer saying</span>
                                                </h4>
                                                <h2 className="title w-600 mb--20">
                                                    The opinions of the community
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-wrapper has-show-more">
                                        <div className="has-show-more-inner-content large-height">
                                            <div className="row row--15">
                                                <div
                                                    className="col-lg-4 col-md-6 col-12 mt--30 sal-animate"
                                                    data-sal="slide-up"
                                                    data-sal-duration={700}
                                                >
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
                                                                    Pixcels-Themes has become such an integral part of
                                                                    our work! By putting our
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
                                                                            <img
                                                                                src="assets/images/team/team-02sm.jpg"
                                                                                alt=""
                                                                            />
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
                                                <div
                                                    className="col-lg-4 col-md-6 col-12 mt--30 sal-animate"
                                                    data-sal="slide-up"
                                                    data-sal-duration={700}
                                                >
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
                                                                    Pixcels-Themes has become such an integral part of
                                                                    our work! By putting our
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
                                                                            <img
                                                                                src="assets/images/team/team-02sm.jpg"
                                                                                alt=""
                                                                            />
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
                                                <div
                                                    className="col-lg-4 col-md-6 col-12 mt--30 sal-animate"
                                                    data-sal="slide-up"
                                                    data-sal-duration={700}
                                                >
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
                                                                    Pixcels-Themes has become such an integral part of
                                                                    our work! By putting our
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
                                                                            <img
                                                                                src="assets/images/team/team-02sm.jpg"
                                                                                alt=""
                                                                            />
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
                                                <div
                                                    className="col-lg-4 col-md-6 col-12 mt--30 sal-animate"
                                                    data-sal="slide-up"
                                                    data-sal-duration={700}
                                                >
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
                                                                    Pixcels-Themes has become such an integral part of
                                                                    our work! By putting our
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
                                                                            <img
                                                                                src="assets/images/team/team-02sm.jpg"
                                                                                alt=""
                                                                            />
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
                                                <div
                                                    className="col-lg-4 col-md-6 col-12 mt--30 sal-animate"
                                                    data-sal="slide-up"
                                                    data-sal-duration={700}
                                                >
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
                                                                    Pixcels-Themes has become such an integral part of
                                                                    our work! By putting our
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
                                                                            <img
                                                                                src="assets/images/team/team-02sm.jpg"
                                                                                alt=""
                                                                            />
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
                                                <div
                                                    className="col-lg-4 col-md-6 col-12 mt--30 sal-animate"
                                                    data-sal="slide-up"
                                                    data-sal-duration={700}
                                                >
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
                                                                    Pixcels-Themes has become such an integral part of
                                                                    our work! By putting our
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
                                                                            <img
                                                                                src="assets/images/team/team-02sm.jpg"
                                                                                alt=""
                                                                            />
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
                                                <div
                                                    className="col-lg-4 col-md-6 col-12 mt--30 sal-animate"
                                                    data-sal="slide-up"
                                                    data-sal-duration={700}
                                                >
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
                                                                    Pixcels-Themes has become such an integral part of
                                                                    our work! By putting our
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
                                                                            <img
                                                                                src="assets/images/team/team-02sm.jpg"
                                                                                alt=""
                                                                            />
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
                                                <div
                                                    className="col-lg-4 col-md-6 col-12 mt--30 sal-animate"
                                                    data-sal="slide-up"
                                                    data-sal-duration={700}
                                                >
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
                                                                    Pixcels-Themes has become such an integral part of
                                                                    our work! By putting our
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
                                                                            <img
                                                                                src="assets/images/team/team-02sm.jpg"
                                                                                alt=""
                                                                            />
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
                                                <div
                                                    className="col-lg-4 col-md-6 col-12 mt--30 sal-animate"
                                                    data-sal="slide-up"
                                                    data-sal-duration={700}
                                                >
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
                                                                    Pixcels-Themes has become such an integral part of
                                                                    our work! By putting our
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
                                                                            <img
                                                                                src="assets/images/team/team-02sm.jpg"
                                                                                alt=""
                                                                            />
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
                                        <div className="rbt-show-more-btn">Show More</div>
                                    </div>
                                </div>
                            </div>
                            {/*..:: Start Accordion Area ::..*/}
                            <div className="rainbow-accordion-area rainbow-section-gap">
                                <div className="container">
                                    <div className="row justify-content-between">
                                        <div className="col-lg-12 col-xl-4 col-12">
                                            <div className="split-inner">
                                                <h2
                                                    className="title sal-animate"
                                                    data-sal="slide-up"
                                                    data-sal-duration={400}
                                                    data-sal-delay={200}
                                                >
                                                    Any question&apos;s? we have answers!
                                                </h2>
                                                <p
                                                    className="description sal-animate"
                                                    data-sal="slide-up"
                                                    data-sal-duration={400}
                                                    data-sal-delay={300}
                                                >
                                                    Don’t find your answer here? just send us a message for
                                                    any query.
                                                </p>
                                                <div
                                                    className="contact-button mt--35 sal-animate"
                                                    data-sal="slide-up"
                                                    data-sal-duration={400}
                                                    data-sal-delay={400}
                                                >
                                                    <a
                                                        className="rainbow-gradient-btn without-shape"
                                                        target="_blank"
                                                        href="contact.php"
                                                    >
                                                        <span>Contact us</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-xl-7 col-12">
                                            <div className="rainbow-accordion-style rainbow-accordion-02 accordion">
                                                <div className="accordion" id="accordionExampleb">
                                                    <div className="accordion-item card">
                                                        <h2
                                                            className="accordion-header card-header"
                                                            id="headingFive"
                                                        >
                                                            <button
                                                                className="accordion-button"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#collapseFive"
                                                                aria-expanded="true"
                                                                aria-controls="collapseFive"
                                                            >
                                                                What is Pixcels themes - AI chat Dashboard ?
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id="collapseFive"
                                                            className="accordion-collapse collapse show"
                                                            aria-labelledby="headingFive"
                                                            data-bs-parent="#accordionExampleb"
                                                        >
                                                            <div className="accordion-body card-body">
                                                                Pixcels-AI chat is a chatbot-powered service that
                                                                offers users tailored suggestions according to their
                                                                interests. Natural language processing is used by
                                                                the app to comprehend user inquiries and deliver
                                                                precise and pertinent answers.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item card">
                                                        <h2
                                                            className="accordion-header card-header"
                                                            id="headingSix"
                                                        >
                                                            <button
                                                                className="accordion-button collapsed"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#collapseSix"
                                                                aria-expanded="false"
                                                                aria-controls="collapseSix"
                                                            >
                                                                How does the AI chatbot Pixcels operate?
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id="collapseSix"
                                                            className="accordion-collapse collapse"
                                                            aria-labelledby="headingSix"
                                                            data-bs-parent="#accordionExampleb"
                                                        >
                                                            <div className="accordion-body card-body">
                                                                After purchasing the product need you any support
                                                                you can be share with us with sending mail to
                                                                rainbowit10@gmail.com.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item card">
                                                        <h2
                                                            className="accordion-header card-header"
                                                            id="headingSeven"
                                                        >
                                                            <button
                                                                className="accordion-button collapsed"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#collapseSeven"
                                                                aria-expanded="false"
                                                                aria-controls="collapseSeven"
                                                            >
                                                                What characteristics make Pixcels who it is?
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id="collapseSeven"
                                                            className="accordion-collapse collapse"
                                                            aria-labelledby="headingSeven"
                                                            data-bs-parent="#accordionExampleb"
                                                        >
                                                            <div className="accordion-body card-body">
                                                                Yes, We will get update the Trydo. And you can get
                                                                it any time. Next time we will comes with more
                                                                feature. You can be get update for unlimited times.
                                                                Our dedicated team works for update.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item card">
                                                        <h2
                                                            className="accordion-header card-header"
                                                            id="headingEight"
                                                        >
                                                            <button
                                                                className="accordion-button collapsed"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#collapseEight"
                                                                aria-expanded="false"
                                                                aria-controls="collapseEight"
                                                            >
                                                                How much does Pixcels set you back?
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id="collapseEight"
                                                            className="accordion-collapse collapse"
                                                            aria-labelledby="headingEight"
                                                            data-bs-parent="#accordionExampleb"
                                                        >
                                                            <div className="accordion-body card-body">
                                                                You can run doob easily. First You&apos;ll need to have
                                                                node and npm on your machine. So Please open your
                                                                command prompt then check your node -v and npm -v
                                                                Version. Goes To Your your command prompt: then
                                                                First: npm install At Last: npm run start. By the
                                                                following way you can be run your project easily.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item card">
                                                        <h2
                                                            className="accordion-header card-header"
                                                            id="headingNine"
                                                        >
                                                            <button
                                                                className="accordion-button collapsed"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#collapseNine"
                                                                aria-expanded="false"
                                                                aria-controls="collapseNine"
                                                            >
                                                                How much does Pixcels set you back?
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id="collapseNine"
                                                            className="accordion-collapse collapse"
                                                            aria-labelledby="headingNine"
                                                            data-bs-parent="#accordionExampleb"
                                                        >
                                                            <div className="accordion-body card-body">
                                                                You can run doob easily. First You&apos;ll need to have
                                                                node and npm on your machine. So Please open your
                                                                command prompt then check your node -v and npm -v
                                                                Version. Goes To Your your command prompt: then
                                                                First: npm install At Last: npm run start. By the
                                                                following way you can be run your project easily.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                                                <span className="theme-gradient">
                                                                    Get Started with Pixcels
                                                                </span>
                                                            </h4>
                                                            <h2 className="title w-600 mb--20">
                                                                Experience Products in AI
                                                            </h2>
                                                            <p className="description b1">
                                                                Based on the conversation with the AI chatbot, you
                                                                will receive <br /> personalized recommendations.
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*..:: End Pricing Style-2  ::..*/}
                </div>
            </main>
        </>
    );
};

export default pricing;
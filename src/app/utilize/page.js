import React from 'react';

const HowToUse = () => {
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
              <h3 className="title h3">How to use</h3>
              <ul className="page-list">
                <li className="rainbow-breadcrumb-item">
                  <a href="index.php">Home</a>
                </li>
                <li className="rainbow-breadcrumb-item active">How to use</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*..:: End Breadcarumb area  ::..*/}
  </div>
  <div className="rbt-utilize-area rainbow-section-gap-big">
    <div className="container">
      <div className="utilize-inner">
        <div className="row g-5">
          <div className="col-lg-3">
            <div className="rbt-default-sidebar sticky-top rbt-shadow-box">
              <div className="inner">
                <div className="content-item-content">
                  <div className="rbt-default-sidebar-wrapper">
                    <nav className="mainmenu-nav">
                      <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                        <li className="has-submenu">
                          <a
                            className="collapse-btn"
                            data-bs-toggle="collapse"
                            href="#upload-your-files"
                            role="button"
                            aria-expanded="true"
                            aria-controls="upload-your-files"
                          >
                            <span>Upload Your Files</span>
                          </a>
                          <div className="show" id="upload-your-files">
                            <ul className="submenu rbt-default-sidebar-list">
                              <li>
                                <a href="#drag-and-drop">
                                  <span>Drag and Drop</span>
                                </a>
                              </li>
                              <li>
                                <a href="#file-browser">
                                  <span>File Browser</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="has-submenu">
                          <a
                            className="collapse-btn collapsed"
                            data-bs-toggle="collapse"
                            href="#choose-sharing-method"
                            role="button"
                            aria-expanded="false"
                            aria-controls="choose-sharing-method"
                          >
                            <span>Choose Sharing Method</span>
                          </a>
                          <div className="collapse" id="choose-sharing-method">
                            <ul className="submenu rbt-default-sidebar-list">
                              <li>
                                <a href="#quick-share">
                                  <span>Quick Share</span>
                                </a>
                              </li>
                              <li>
                                <a href="#pass-protected-share">
                                  <span>Pass Protected Share</span>
                                </a>
                              </li>
                              <li>
                                <a href="#encrypted-share">
                                  <span>Encrypted Share</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="has-submenu">
                          <a
                            className="collapse-btn collapsed"
                            data-bs-toggle="collapse"
                            href="#share-via-link-or-email"
                            role="button"
                            aria-expanded="false"
                            aria-controls="share-via-link-or-email"
                          >
                            <span>Share via Link or Email</span>
                          </a>
                          <div
                            className="collapse"
                            id="share-via-link-or-email"
                          >
                            <ul className="submenu rbt-default-sidebar-list">
                              <li>
                                <a href="#generate-a-link">
                                  <span>Generate a Link</span>
                                </a>
                              </li>
                              <li>
                                <a href="#send-via-email">
                                  <span>Send via Email</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="has-submenu">
                          <a
                            className="collapse-btn collapsed"
                            data-bs-toggle="collapse"
                            href="#manage-shared-files"
                            role="button"
                            aria-expanded="false"
                            aria-controls="manage-shared-files"
                          >
                            <span>Manage Shared Files</span>
                          </a>
                          <div className="collapse" id="manage-shared-files">
                            <ul className="submenu rbt-default-sidebar-list">
                              <li>
                                <a href="#coming-soon">
                                  <span>Coming Soon</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 inner-content pl--0">
            <div id="upload-your-files_two" className="single-inner-box">
              <h3 className="section-title">Upload Your Files</h3>
              <div
                id="drag-and-drop"
                className="rbt-elements-area rbt-shadow-box"
              >
                <div className="wrapper">
                  <h4 className="title-sm">Drag and Drop</h4>
                  <div className="desc">
                    <div className="image">
                      <img
                        src="assets/images/utilize-img/ut-image-01.png"
                        alt=""
                      />
                    </div>
                    <p className="b1">
                      All you have to do to register for an account on Pixcels -
                      AI chat app is provide your name, email address, and
                      password. You can begin examining the app&apos;s features as
                      soon as you&apos;ve registered. Chatting with friends, family,
                      and even new acquaintances is made simple with the Pixcels{" "}
                    </p>
                    <h6>Deep Learning and Transformers</h6>
                    <ul className="content-list">
                      <li>
                        Around 2013, the use of deep learning, especially
                        transformer architectures, revolutionized NLP.
                      </li>
                      <li>
                        Transformer models, like OpenAI&apos;s GPT (Generative
                        Pre-trained Transformer) series, became
                      </li>
                      <li>
                        AI text generators, including GPT-3, have found
                        applications in chatbots, content creation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                id="file-browser"
                className="rbt-elements-area rbt-shadow-box"
              >
                <div className="wrapper">
                  <h4 className="title-sm">File Browser</h4>
                  <div className="desc">
                    <div className="image">
                      <img
                        src="assets/images/utilize-img/ut-image-02.png"
                        alt=""
                      />
                    </div>
                    <p className="b1">
                      All you have to do to register for an account on Pixcels -
                      AI chat app is provide your name, email address, and
                      password. You can begin examining the app&apos;s features as
                      soon as you&apos;ve registered. Chatting with friends, family,
                      and even new acquaintances is made simple with the Pixcels{" "}
                    </p>
                    <h6>Deep Learning and Transformers</h6>
                    <ul className="content-list">
                      <li>
                        Around 2013, the use of deep learning, especially
                        transformer architectures, revolutionized NLP.
                      </li>
                      <li>
                        Transformer models, like OpenAI&apos;s GPT (Generative
                        Pre-trained Transformer) series, became
                      </li>
                      <li>
                        AI text generators, including GPT-3, have found
                        applications in chatbots, content creation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div id="choose-sharing-method" className="single-inner-box">
              <h3 className="section-title">Choose Sharing Method</h3>
              <div
                id="quick-share"
                className="rbt-elements-area rbt-shadow-box"
              >
                <div className="wrapper">
                  <h4 className="title-sm">Quick Share</h4>
                  <div className="desc">
                    <div className="image">
                      <img
                        src="assets/images/utilize-img/ut-image-01.png"
                        alt=""
                      />
                    </div>
                    <p className="b1">
                      All you have to do to register for an account on Pixcels -
                      AI chat app is provide your name, email address, and
                      password. You can begin examining the app&apos;s features as
                      soon as you&apos;ve registered. Chatting with friends, family,
                      and even new acquaintances is made simple with the Pixcels{" "}
                    </p>
                    <h6>Deep Learning and Transformers</h6>
                    <ul className="content-list">
                      <li>
                        Around 2013, the use of deep learning, especially
                        transformer architectures, revolutionized NLP.
                      </li>
                      <li>
                        Transformer models, like OpenAI&apos;s GPT (Generative
                        Pre-trained Transformer) series, became
                      </li>
                      <li>
                        AI text generators, including GPT-3, have found
                        applications in chatbots, content creation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                id="pass-protected-share"
                className="rbt-elements-area rbt-shadow-box"
              >
                <div className="wrapper">
                  <h4 className="title-sm">Pass Protected Share</h4>
                  <div className="desc">
                    <div className="image">
                      <img
                        src="assets/images/utilize-img/ut-image-02.png"
                        alt=""
                      />
                    </div>
                    <p className="b1">
                      All you have to do to register for an account on Pixcels -
                      AI chat app is provide your name, email address, and
                      password. You can begin examining the app&apos;s features as
                      soon as you&apos;ve registered. Chatting with friends, family,
                      and even new acquaintances is made simple with the Pixcels{" "}
                    </p>
                    <h6>Deep Learning and Transformers</h6>
                    <ul className="content-list">
                      <li>
                        Around 2013, the use of deep learning, especially
                        transformer architectures, revolutionized NLP.
                      </li>
                      <li>
                        Transformer models, like OpenAI&apos;s GPT (Generative
                        Pre-trained Transformer) series, became
                      </li>
                      <li>
                        AI text generators, including GPT-3, have found
                        applications in chatbots, content creation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                id="encrypted-share"
                className="rbt-elements-area rbt-shadow-box"
              >
                <div className="wrapper">
                  <h4 className="title-sm">Encrypted Share</h4>
                  <div className="desc">
                    <div className="image">
                      <img
                        src="assets/images/utilize-img/ut-image-03.png"
                        alt=""
                      />
                    </div>
                    <p className="b1">
                      All you have to do to register for an account on Pixcels -
                      AI chat app is provide your name, email address, and
                      password. You can begin examining the app&apos;s features as
                      soon as you&apos;ve registered. Chatting with friends, family,
                      and even new acquaintances is made simple with the Pixcels{" "}
                    </p>
                    <h6>Deep Learning and Transformers</h6>
                    <ul className="content-list">
                      <li>
                        Around 2013, the use of deep learning, especially
                        transformer architectures, revolutionized NLP.
                      </li>
                      <li>
                        Transformer models, like OpenAI&apos;s GPT (Generative
                        Pre-trained Transformer) series, became
                      </li>
                      <li>
                        AI text generators, including GPT-3, have found
                        applications in chatbots, content creation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div id="share-via-link-or-email" className="single-inner-box">
              <h3 className="section-title">Share via Link or Email</h3>
              <div
                id="generate-a-link"
                className="rbt-elements-area rbt-shadow-box"
              >
                <div className="wrapper">
                  <h4 className="title-sm">Generate a Link</h4>
                  <div className="desc">
                    <div className="image">
                      <img
                        src="assets/images/utilize-img/ut-image-01.png"
                        alt=""
                      />
                    </div>
                    <p className="b1">
                      All you have to do to register for an account on Pixcels -
                      AI chat app is provide your name, email address, and
                      password. You can begin examining the app&apos;s features as
                      soon as you&apos;ve registered. Chatting with friends, family,
                      and even new acquaintances is made simple with the Pixcels{" "}
                    </p>
                    <h6>Deep Learning and Transformers</h6>
                    <ul className="content-list">
                      <li>
                        Around 2013, the use of deep learning, especially
                        transformer architectures, revolutionized NLP.
                      </li>
                      <li>
                        Transformer models, like OpenAI&apos;s GPT (Generative
                        Pre-trained Transformer) series, became
                      </li>
                      <li>
                        AI text generators, including GPT-3, have found
                        applications in chatbots, content creation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                id="send-via-email"
                className="rbt-elements-area rbt-shadow-box"
              >
                <div className="wrapper">
                  <h4 className="title-sm">Send via Email</h4>
                  <div className="desc">
                    <div className="image">
                      <img
                        src="assets/images/utilize-img/ut-image-02.png"
                        alt=""
                      />
                    </div>
                    <p className="b1">
                      All you have to do to register for an account on Pixcels -
                      AI chat app is provide your name, email address, and
                      password. You can begin examining the app&apos;s features as
                      soon as you&apos;ve registered. Chatting with friends, family,
                      and even new acquaintances is made simple with the Pixcels{" "}
                    </p>
                    <h6>Deep Learning and Transformers</h6>
                    <ul className="content-list">
                      <li>
                        Around 2013, the use of deep learning, especially
                        transformer architectures, revolutionized NLP.
                      </li>
                      <li>
                        Transformer models, like OpenAI&apos;s GPT (Generative
                        Pre-trained Transformer) series, became
                      </li>
                      <li>
                        AI text generators, including GPT-3, have found
                        applications in chatbots, content creation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div id="manage-shared-files" className="single-inner-box">
              <h3 className="section-title">Manage Shared Files</h3>
              <div
                id="coming-soon"
                className="rbt-elements-area rbt-shadow-box"
              >
                <div className="wrapper">
                  <h4 className="title-sm">Coming Soon!</h4>
                  <div className="desc">
                    <div className="image">
                      <img
                        src="assets/images/utilize-img/ut-image-01.png"
                        alt=""
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
  </div>
</>
    );
  };
  
  export default HowToUse;
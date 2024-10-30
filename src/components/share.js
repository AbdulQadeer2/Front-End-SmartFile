import { useState } from 'react';

const ShareModal = () => {
  const [link, setLink] = useState('https://www.youtube.com/');

  const handleCopyLink = () => {
    navigator.clipboard.writeText(link);
    alert('Link copied to clipboard!');
  };

  return (
    <div
      id="shareModal"
      className="modal rbt-modal-box share-modal fade"
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content wrapper modal-small">
          <h5 className="title">Share</h5>
          <ul className="social-icon social-default transparent-with-border mb--20">
            <li
              data-sal="slide-up"
              data-sal-duration="400"
              data-sal-delay="200"
            >
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li
              data-sal="slide-up"
              data-sal-duration="400"
              data-sal-delay="300"
            >
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li
              data-sal="slide-up"
              data-sal-duration="400"
              data-sal-delay="400"
            >
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li
              data-sal="slide-up"
              data-sal-duration="400"
              data-sal-delay="500"
            >
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
          <div className="chat-form">
            <div className="text-form d-flex align-items-center">
              <input
                type="text"
                className="copy-link-input"
                value={link}
                readOnly
              />
              <button
                className="btn-default bg-solid-primary"
                type="button"
                onClick={handleCopyLink}
              >
                Copy
              </button>
            </div>
          </div>
          <button className="close-button" data-bs-dismiss="modal">
            <i className="fa-sharp fa-regular fa-x"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="sticky-bottom bg-gray p-1" style={{ backdropFilter: 'blur(2px)' }}>
      <hr className="bg-dark" />
      <div className="d-flex justify-content-between align-items-center container">
        <div>&copy; 2023 Education, Inc</div>
        <div>
          <h3 className="h5">Education</h3>
        </div>
        <div>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-link text-primary"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-link text-danger"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-link text-info"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

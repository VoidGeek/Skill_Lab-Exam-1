import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { CSSTransition } from 'react-transition-group';
import CountUp from 'react-countup';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const accordionButton = document.querySelector('.accordion-button');

    const handleAccordionClick = () => {
      setIsExpanded((prevState) => !prevState);
    };

    // Automatically expand the accordion when entering the page
    setIsExpanded(true);

    accordionButton.addEventListener('click', handleAccordionClick);

    return () => {
      accordionButton.removeEventListener('click', handleAccordionClick);
    };
  }, []);

  return (
    <div className="container">
      <h1 className="mt-4">About</h1>
      <div className={`accordion mt-4${isExpanded ? ' show' : ''}`} id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded={isExpanded}
              aria-controls="collapseOne"
            >
              Organization Name
            </button>
          </h2>
          <div
            id="collapseOne"
            className={`accordion-collapse collapse${isExpanded ? ' show' : ''}`}
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p className="mb-2">Organization Name: XYZ Education Center</p>
              <p className="mb-2">Address: 123 Main Street, City, State</p>
              <p className="mb-2">Location: City, State</p>
              <p>Contact Details: Phone: 123-456-7890, Email: info@xyzeducation.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center mt-5">
        <h3>Achievements</h3>
        <div className="row">
          <div className="col">
            <CSSTransition in={true} timeout={1000} classNames="counter">
              <div className="counter">
                <CountUp start={0} end={10} duration={3} className="counter-number" />
                <p>Years of experience</p>
              </div>
            </CSSTransition>
          </div>
          <div className="col">
            <CSSTransition in={true} timeout={1000} classNames="counter">
              <div className="counter">
                <CountUp start={0} end={1000} duration={3} className="counter-number" />
                <p>Successful graduates</p>
              </div>
            </CSSTransition>
          </div>
          <div className="col">
            <CSSTransition in={true} timeout={1000} classNames="counter">
              <div className="counter">
                <CountUp start={0} end={10} duration={3} className="counter-number" />
                <p>Award-winning teachers</p>
              </div>
            </CSSTransition>
          </div>
          <div className="col">
            <CSSTransition in={true} timeout={1000} classNames="counter">
              <div className="counter">
                <CountUp start={0} end={90} duration={3} className="counter-number" />
                <p>Industry partnerships</p>
              </div>
            </CSSTransition>
          </div>
        </div>
      </div>

      <style>
        {`
        .accordion-body {
          backdrop-filter: blur(8px);
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
        }

        .counter-number {
          font-size: 24px;
          font-weight: bold;
          color: #fbd46d;
        }

        .counter-enter {
          opacity: 0;
          transform: translateY(50%);
        }

        .counter-enter-active {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 1s, transform 1s;
        }

        .counter-exit {
          opacity: 1;
          transform: translateY(0);
        }

        .counter-exit-active {
          opacity: 0;
          transform: translateY(-50%);
          transition: opacity 1s, transform 1s;
        }
      `}
      </style>
    </div>
  );
};

export default About;

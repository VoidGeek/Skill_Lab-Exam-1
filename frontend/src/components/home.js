import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Home = () => {
  const navigate = useNavigate();

  const handleBrowseCourses = () => {
    navigate('./course');
  };

  return (
    <div>
      <div className="jumbotron text-center">
        <h1 className="display-4">Welcome to Education Services</h1>
        <p className="lead">Unlock your potential with our comprehensive range of courses</p>
      </div>

      <div>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div className="carousel-inner" >
            <div className="carousel-item active " data-bs-interval="2000">
              <img
                src="https://assets.telegraphindia.com/telegraph/2021/Jan/1611610628_online-education.jpg"
                className="d-block w-100"
                alt="Slide 1"
              />
              <div className="carousel-caption d-flex justify-content-center align-items-center">
                <div className="text-center text-white">
                  <h2 className="display-4 mb-4">Discover New Opportunities</h2>
                  <p className="lead mb-4">Expand your knowledge and skills with our comprehensive course offerings.</p>
                  <button onClick={handleBrowseCourses} className="btn btn-primary btn-lg">Browse Courses</button>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src="https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&w=1000&q=80"
                className="d-block w-100"
                alt="Slide 2"
              />
              <div className="carousel-caption d-flex justify-content-center align-items-center">
                <div className="text-center text-white">
                  <h2 className="display-4 mb-4">Unlock Your Potential</h2>
                  <p className="lead mb-4">Take your career to new heights with our advanced courses and expert instructors.</p>
                  <button onClick={handleBrowseCourses} className="btn btn-primary btn-lg">Browse Courses</button>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src="https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?cs=srgb&dl=pexels-julia-m-cameron-4144923.jpg&fm=jpg"
                className="d-block w-100"
                alt="Slide 3"
              />
              <div className="carousel-caption d-flex justify-content-center align-items-center">
                <div className="text-center text-white">
                  <h2 className="display-4 mb-4">Learn and Grow</h2>
                  <p className="lead mb-4">Enhance your skills and stay ahead in the ever-evolving world of education.</p>
                  <button onClick={handleBrowseCourses} className="btn btn-primary btn-lg">Browse Courses</button>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src="https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?cs=srgb&dl=pexels-julia-m-cameron-4144923.jpg&fm=jpg"
                className="d-block w-100"
                alt="Slide 4"
              />
              <div className="carousel-caption d-flex justify-content-center align-items-center">
                <div className="text-center text-white">
                  <h2 className="display-4 mb-4">Start Your Learning Journey</h2>
                  <p className="lead mb-4">Embark on a path of knowledge and success with our diverse course selection.</p>
                  <button onClick={handleBrowseCourses} className="btn btn-primary btn-lg">Browse Courses</button>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

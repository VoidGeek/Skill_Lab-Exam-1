import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Course = () => {
  const courseData = [
    {
      id: 1,
      title: 'C',
      logo: 'fab fa-cuttlefish fa-3x text-primary',
      duration: '3 months',
      eligibility: 'Basic programming knowledge',
      fee: '$100',
    },
    {
      id: 2,
      title: 'C++',
      logo: 'fab fa-cuttlefish fa-3x text-primary',
      duration: '4 months',
      eligibility: 'Intermediate programming knowledge',
      fee: '$150',
    },
    {
      id: 3,
      title: 'Java',
      logo: 'fab fa-java fa-3x text-danger',
      duration: '6 months',
      eligibility: 'Basic programming knowledge',
      fee: '$200',
    },
    {
      id: 4,
      title: 'Python',
      logo: 'fab fa-python fa-3x text-success',
      duration: '3 months',
      eligibility: 'Basic programming knowledge',
      fee: '$120',
    },
    {
      id: 5,
      title: 'React',
      logo: 'fab fa-react fa-3x text-info',
      duration: '2 months',
      eligibility: 'Basic web development knowledge',
      fee: '$150',
    },
    {
      id: 6,
      title: 'JavaScript',
      logo: 'fab fa-js fa-3x text-warning',
      duration: '3 months',
      eligibility: 'Basic programming knowledge',
      fee: '$100',
    },
  ];

  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardHover = (id) => {
    setHoveredCard(id);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  const cardStyle = (id) => ({
    marginBottom: '1.5rem',
    cursor: 'pointer',
    transition: 'transform 0.5s',
    transform: hoveredCard === id ? 'translateY(-10px)' : 'none',
    backgroundColor: hoveredCard === id ? '#f8f9fa' : 'white',
  });

  return (
    <div className="container">
      <h1 className="display-4 text-center my-4">Courses Offered</h1>
      <style>
        {`
          .card {
            margin-bottom: 1.5rem;
            cursor: pointer;
            transition: transform 0.5s;
          }
          .card:hover {
            transform: translateY(-10px);
          }
        `}
      </style>
      <div className="row">
        {courseData.map((course) => (
          <div
            key={course.id}
            className="col-md-4"
            style={cardStyle(course.id)}
            onMouseEnter={() => handleCardHover(course.id)}
            onMouseLeave={handleCardLeave}
          >
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">
                  <i className={course.logo}></i> {course.title}
                </h5>
                {hoveredCard === course.id && (
                  <>
                    <p>Duration: {course.duration}</p>
                    <p>Eligibility Criteria: {course.eligibility}</p>
                    <p>Fees: {course.fee}</p>
                    <button className="btn btn-primary">Register</button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;

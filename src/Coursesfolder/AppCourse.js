// src/Coursesfolder/AppCourse.js

import React from 'react';
import Header from '../home/Header';
import Footer from '../home/Footer';
import coursesData from './CoursesData'; // ✅ Correct import
import './Courses.css'; // ✅ Correct import

const AppCourse = () => {
  return (
    <>
      <Header />
      <div className="course-container">
        <h1 className="course-heading">Our Top Courses</h1>
        <div className="course-grid">
          {coursesData.map((course, index) => (
            <div className="course-card" key={index}>
              <img src={course.image} alt={course.title} className="course-image" />
              <h2 className="course-title">{course.title}</h2>
              <p className="course-description">{course.description}</p>
              <button className="enroll-btn">Enroll Now</button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AppCourse;

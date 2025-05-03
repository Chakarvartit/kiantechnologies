import React from "react";
import "./EthicalHackingSyllabus.css"; // Ensure you import the correct CSS file

const EthicalHackingSyllabus = () => {
  return (
    <section id="about-us" className="about-us-section">
      <div className="container">
        <div className="content-wrapper">
          {/* Left side: Image section */}
          <div className="image-container">
            <div className="image-item">
              <img
                src="https://kiantechnologies.in/uploads/eh01.png"
                alt="Ethical Hacking Image 1"
                className="img-fluid"
              />
            </div>
            <div className="image-item">
              <img
                src="https://kiantechnologies.in/uploads/eh02.png"
                alt="Ethical Hacking Image 2"
                className="img-fluid"
              />
            </div>
            <div className="image-item">
              <img
                src="https://kiantechnologies.in/uploads/eh03.png"
                alt="Ethical Hacking Image 3"
                className="img-fluid"
              />
            </div>
          </div>

          {/* Right side: Content section */}
          <div className="text-content">
            <div className="section-title">
              <span className="subtitle">OUR INSTITUTE COURSE</span>
              <span className="subtitle">OUR INSTITUTE COURSE</span>
              <h2>
                <span>Ethical Hacking</span> Course Syllabus
              </h2>
            </div>

            <p className="p1">
              The CEH training in Bhilai prepares you to master advanced
              database management, networking, and operating systems. You'll
              also develop crucial soft skills to effectively communicate
              security issues within any organization. Our comprehensive ethical
              hacking course encompasses the latest security domains essential
              for fortifying an organization's information security
              infrastructure.
            </p>

            <ul className="syllabus-list">
              <li>Real-time network traffic analysis</li>
              <li>Advanced SQL injection techniques</li>
              <li>Defense against complex network attacks</li>
              <li>Sophisticated session and DNS spoofing strategies</li>
              <li>Exploiting and mitigating buffer overflow vulnerabilities</li>
              <li>Advanced password cracking methods</li>
            </ul>

            <p className="p2">
              Moreover, ethical hackers need a forward-thinking mindset to
              counteract the ever-evolving tactics of black hat hackers. As a
              professional ethical hacker, you will anticipate and thwart these
              emerging threats. The certified ethical hacker course in Bhilai
              empowers you with the latest tools and methodologies used by elite
              hackers and cybersecurity professionals. You'll engage in 24 dynamic
              hacking challenges, spread across 4 levels of increasing complexity,
              addressing 18 attack vectors, including the OWASP Top 10, transforming
              you into a future-ready cybersecurity expert.
            </p>

            <div>
              <div className="button-container" style={{ marginTop: '15px' }}>
                <a href="contact.php" className="action-btn">
                  Inquire Now
                </a>
                <a
                  href="uploads/courses/IT Security &amp; Ethical Hacking- Beginner to Pro.pdf"
                  download
                  className="action-btn"
                >
                  Get Brochure
                </a>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default EthicalHackingSyllabus;

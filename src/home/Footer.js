import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="animated-footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="https://kiantechnologies.in/assets/img/logo/logo12.png" alt="Logo" />
        </div>

        <div className="footer-about">
          <p>
            Kian Technologies is a premier IT Security Training provider based in Bhilai, India. Our certified instructors empower IT professionals to safeguard networks in today's interconnected world.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-links-column">
            <h3>Useful Links</h3>
            <ul>
              <li><a href="index.php">Home</a></li>
              <li><a href="about.php">About Us</a></li>
              <li><a href="course.php">Course</a></li>
              <li><a href="contact.php">Contact Us</a></li>
              <li><a href="registration.php">Registration</a></li>
            </ul>
          </div>

          <div className="footer-links-column">
            <h3>Account Info</h3>
            <ul>
              <li><a href="teacher.php">Teacher</a></li>
              <li><a href="blog.php">Blog</a></li>
              <li><a href="casestudy.php">Case Study</a></li>
              <li><a href="masterclass.php">Masterclass</a></li>
              <li><a href="faq.php">FAQs</a></li>
            </ul>
          </div>

          <div className="footer-photo-gallery">
            <h3>Photo Gallery</h3>
            <div className="gallery">
              <img src="https://kiantechnologies.in/assets/img/gallery/g-1.jpg" alt="Gallery 1" />
              <img src="https://kiantechnologies.in/assets/img/gallery/g-2.jpg" alt="Gallery 2" />
              <img src="https://kiantechnologies.in/assets/img/gallery/g-3.jpg" alt="Gallery 3" />
            </div>
          </div>
        </div>

        <div className="footer-social ul-li">
          <h2 className="widget-title">Social Network</h2>
          <ul>
            <li><a href="https://wa.me/7587496155" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i> WhatsApp</a></li>
            <li><a href="https://www.facebook.com/kiantechnologies" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i> Facebook</a></li>
            <li><a href="https://www.instagram.com/kiantechnologies" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i> Instagram</a></li>
            <li><a href="https://www.linkedin.com/company/kiantechnologies/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
            <li><a href="https://x.com/kiantechnologie" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i> Twitter</a></li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h3>Subscribe to Our Newsletter</h3>
          <form method="POST" action="">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className="footer-bottom">
          <p>© 2024 - Designed by <a href="https://codeandsecure.com/">Code and Secure</a>. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

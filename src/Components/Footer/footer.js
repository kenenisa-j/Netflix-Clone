import React from "react";
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <div className="footer">
      <h4>Questions? Contact us.</h4>

      {/* Social icons in a row like Netflix */}
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FacebookIcon className="facebook" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <InstagramIcon className="instagram" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <YouTubeIcon className="youtube" />
        </a>
      </div>

      <div className="footer_links">
        <ul>
          <li>FAQ</li>
          <li>Investor Relations</li>
          <li>Privacy</li>
          <li>Speed Test</li>
        </ul>

        <ul>
          <li>Help Center</li>
          <li>Jobs</li>
          <li>Cookie Preferences</li>
          <li>Legal Notices</li>
        </ul>

        <ul>
          <li>Account</li>
          <li>Ways to Watch</li>
          <li>Corporate Information</li>
          <li>Only on Netflix</li>
        </ul>

        <ul>
          <li>Media Center</li>
          <li>Terms of Use</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <p className="footer_copy">© 2026 Netflix Clone</p>
    </div>
  );
}

export default Footer;

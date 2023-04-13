import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import "../styles/SocialMedia.css";

export default function SocialMedia() {
  return (
    <div className="social-media-container">
      <a
        href="https://github.com/saqlain-shah"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="social-media-icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/saqlain-shah/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="social-media-icon" />
      </a>
      <a
        href="https://www.facebook.com/cyedzada1/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook className="social-media-icon" />
      </a>
      <a
        href="https://www.instagram.com/shah_baltee/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="social-media-icon" />
      </a>
      <a
        href="https://wa.me/+923475484803"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="social-media-icon" />
      </a>
    </div>
  );
}

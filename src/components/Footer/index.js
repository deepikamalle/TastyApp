import {
  FaPinterestSquare,
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa'
import './index.css'

export default function Footer() {
  return (
    <div className="footer-section">
      <div className="website-logo-name-container">
        <img
          className="footer-website-logo"
          alt="website-footer-logo"
          src="https://res.cloudinary.com/daltzmh3x/image/upload/v1694269209/Footer_mw4y6k.png"
        />
        <h1 className="footer-website-name">Tasty Kitchen</h1>
      </div>
      <p className="footer-description">
        The only thing we are serious about is food.Contact us on
      </p>
      <div className="social-icons-container">
        <FaFacebookSquare className="social-icon" color="#ffffff" />
        <FaInstagram className="social-icon" color="#ffffff" />
        <FaTwitter className="social-icon" color="#ffffff" />
        <FaPinterestSquare className="social-icon" color="#ffffff" />
      </div>
    </div>
  )
}

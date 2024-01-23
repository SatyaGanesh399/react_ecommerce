import { Button } from "antd";
import Logo from "../../extras/logo";
import "./index.scss";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

function index() {
  return (
    <div className="footer-container w-90 m-auto">
      <div className="footer-item1">
        <Logo />
        <p>
          There are many variations and passages of Ecommerce platform but we
          are all in one.
        </p>
        <div className="footer-social-media d-flex align-items-center justify-content-start">
          <FaInstagram className="socialmedia-icon" />
          <FaLinkedin className="socialmedia-icon " />
          <FaFacebookSquare className="socialmedia-icon" />
          <FaSquareTwitter className="socialmedia-icon" />
        </div>
      </div>
      <div className="footer-item2">
        <p className="footer-heading">Quick Links</p>
        <span>Home</span>
        <span>About</span>
        <span>Shop</span>
        <span>Customer Support</span>
      </div>
      <div className="footer-item3">
        <p className="footer-heading">Contact</p>
        <p>
          +91 9999999999, Arekere Signal point, Bannergatta road, Bangalore,
          Karnataka
        </p>
      </div>
      <div className="footer-item4">
        <p className="footer-heading">Subscribe to our Email</p>
        <p>For Latest News & Updates</p>
        <div className="footer-subscribe">
          <input className="border-radius-20" />
          <Button shape="round">SUBSCRIBE</Button>
        </div>
      </div>
    </div>
  );
}

export default index;

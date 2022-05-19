import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";

import "./footer.styles.scss";

const Footer = () => {
  return (
    <div className="footer-background">
      <section>
        <h2 className="footer-title">
          Carli's Shoppe | Exquisite Coffee & Desserts
        </h2>
        <div className="footer_icons">
          <a href="https://www.facebook.com/" rel="noreferrer" target="_blank">
            <FaFacebookSquare />
          </a>
          <a href="https://www.linkedin.com/" rel="noreferrer" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/" rel="noreferrer" target="_blank">
            <FaInstagramSquare />
          </a>
        </div>
        <h3 className="footer-title-sub">Attributes</h3>
        <div className="attributes-box">
          <a href="https://pngtree.com/so/straight">
            straight png from pngtree.com/
          </a>
          <a href="https://storyset.com/worker">
            Worker illustrations by Storyset
          </a>
        </div>
      </section>
    </div>
  );
};

export default Footer;

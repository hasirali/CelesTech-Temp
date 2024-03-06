import React from "react";
import './Footer.scss'
import '../Styles/media.scss'

const Footer = () => {
  return (
    <footer>
      <div>
        <h1>CelesTech</h1>
        <p>@all right reserved</p>
      </div>

      <div>
        <h5>Follow Us</h5>
        <div>
          <a href="https://github.com/xayyeem" target={"blank"}>
            Github
          </a>
          <a href="https://www.linkedin.com/in/khalid-haider-jafri-78368220a/" target={"blank"}>
            LinkedIn
          </a>
          <a href="https://khalidhaiderjafri.netlify.app/" target={"blank"}>
            Portfolio
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
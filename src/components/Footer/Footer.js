import React from "react";
import YouTube from "../RedesSociales/YouTube";
import Instagram from "../RedesSociales/Instagram";
import Facebook from "../RedesSociales/Facebook";

const Footer = (props) => {
  return (
    <footer>
      <div className="Copyright">
        <p>Copyright &copy; 2021 Yes I Can.</p>
        <p>Author: Adrian Ayala</p>
        <p>
          <a href="mailto:adrian.ayala1@gmail.com">adrian.ayala1@gmail.com</a>
        </p>
      </div>

      <div className="social">
        <a href="https://www.facebook.com/yesicanmusik/">
          <Facebook />
        </a>
        <a href="https://www.youtube.com/channel/UChBlQgk0S3744ppyYvAi8Fw">
          <YouTube />
        </a>
        <a href="https://www.instagram.com/yesican_musik/">
          <Instagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
    <div class="social">
      <a href="https://www.instagram.com" target="_blank"><img src="./public/images/ig_logo.png"
              alt="Logo y link a Instagram" loading="eager"/></a>
      <a href="https://twitter.com/?lang=es" target="_blank"><img src="./public/images/tw_logo.png"
              alt="Logo y link a Twitter" loading="eager"/></a>
      <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank"><img src="./public/images/correo_logo.png"
              alt="Logo y link a correo electronico de SuriaTickets" loading="eager"/></a>
  </div>
    <div class="copy_footer">
      SuriaTickets &copy; 2023
    </div>
    <a class="footerLogo" data-aos="zoom-out" data-aos-duration="1000" href="/"><img class="footer_logo_img"
        src="./public/images/sol.png" alt="Logo del sol de SuriaTickets" loading="eager"/></a>
  </footer>
  );
};

export default Footer;

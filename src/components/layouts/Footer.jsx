import React from "react";

function Footer(props) {
  const footerYear = new Date().getFullYear();
  return (
    <footer className="footer p-10 bg-grey-700 text-primary-content footer-center">
      <p> design by damin {footerYear} all right reserved</p>
    </footer>
  );
}

export default Footer;

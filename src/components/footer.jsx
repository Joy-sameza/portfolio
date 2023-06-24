import React from "react";

export default function Footer() {
  return (
    <footer>
      <hr />
      <div className="footer-content">
        <p>
          Working in development and design has given me a stronger sense of the
          extraordinary in my digital work.
        </p>
        <div>
          <span className="copyright">
            &copy; Kenfack Sameza. All rights reserved 2023
          </span>
          <div className="social">
            <ul>
              <li>
                <a href="https://www.instagram.com/christian_gueutsop/" target="blank">
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send/?phone=237699202940&text=Hello+I+got+your+number+from+your+portfolio"
                  target="blank"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="https://github.com/Joy-sameza" target="blank">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/victorin-joy-kenfack-sameza-894366264/" target="blank">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

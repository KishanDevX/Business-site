import React from "react";
import "../stylesheets/footer.css";

const LocationIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="icon icon-location"
    >
      <path
        stroke_linecap="round"
        stroke_linejoin="round"
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        stroke_linecap="round"
        stroke_linejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      />
    </svg>

    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   viewBox="0 0 24 24"
    //   fill="currentColor"
    //   className="icon icon-location"
    // >
    //   <path
    //     fill_rule="evenodd"
    //     d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    //     clip_rule="evenodd"
    //   />
    // </svg>
  );
};

const PhoneIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="icon icon-phone"
    >
      <path
        stroke_linecap="round"
        stroke_linejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
      />
    </svg>
  );
};

const EmailIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke_width="1.5"
      stroke="currentColor"
      className="icon icon-email"
    >
      <path
        stroke_linecap="round"
        stroke_linejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
      />
    </svg>
  );
};

const GetInTouch = () => {
  return (
    <div className="get-in-touchCard">
      <h5>Get In Touch</h5>
      <ul>
        <li className="foot-location">
          <div className="txt-icon">
            <LocationIcon />
          </div>
          <div className="txt-label">Imambada road, Mirzapur</div>
        </li>
        <li className="foot-phone">
          <div className="txt-icon">
            <PhoneIcon />
          </div>
          <div className="txt-label">+91 90262 72470</div>
        </li>
        <li className="foot-email">
          <div className="txt-icon">
            <EmailIcon />
          </div>
          <div className="txt-label">devkishanx16@gmail.com</div>
        </li>
      </ul>
    </div>
  );
};

const QuickLinks = () => {
  return (
    <div className="quick-linksCard">
      <h5>Quick Links</h5>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="https://hilarious-queijadas-218c80.netlify.app/">Projects</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer>
      <div className="foot-top">
        <div className="foot-intro-part">
          <h3>DevX-Kishan</h3>
          <p>Building fast, marketing websites for Mirzapur & beyond.</p>
          <div className="social-icons"></div>
        </div>
        <div className="foot-details-part">
          <GetInTouch />
          <QuickLinks />
        </div>
      </div>
      <div className="foot-bottom">
        <hr />
        <span>&copy; 2026 DevX-Kishan. All rights reserved</span>
      </div>
    </footer>
  );
};

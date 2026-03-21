import React from "react";
import "../stylesheets/contact.css";
import { useEffect, useState } from "react";

import whatsappIcon from "../assets/icons/whatsapp.svg";
import instagramIcon from "../assets/icons/instagram.svg";
import facebookIcon from "../assets/icons/facebook.svg";

const contact_data = [
  {
    icon: whatsappIcon,
    username: "+91 98765 43210",
    other_info: "Chat with us on WhatsApp",
    profile_url: "https://wa.me/919876543210",
  },
  {
    icon: instagramIcon,
    username: "Kishan-devx16",
    other_info: "Follow us on Instagram",
    profile_url: "https://www.instagram.com/fromnow",
  },
  {
    icon: facebookIcon,
    username: "Kishan-Kumar_codes",
    other_info: "Like us on Facebook",
    profile_url: "https://www.facebook.com/fromnow",
  },
];

const MessageIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="icon icon-message"
    >
      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
    </svg>
  );
};

const Social_link_card = ({ icon, username, other_info, profile_url }) => {
  return (
    <a
      className="social-link-card"
      href={profile_url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="social-icon-box">
        <img src={icon} alt={username} />
      </div>
      <hr className="vertical-line" />
      <div className="social-info">
        <h3 className="social-username">{username}</h3>
        <p className="social-other-info">{other_info}</p>
      </div>
    </a>
  );
};

const Contact_form_card = () => {
  return (
    <div className="contact-form-card card1">
      <h3 className="form-head head1">Send us a message</h3>
      <p className="desc1 form-desc">We would love to hear from you</p>
      <form action="">
        <input className="contact-input" type="text" placeholder="Your Name" />
        <input
          className="contact-input"
          type="email"
          name=""
          id=""
          placeholder="Your Email"
        />
        <textarea
          className="card1 contact-input"
          rows="8"
          name=""
          id=""
          placeholder="Your Message"
        ></textarea>
        <button className="btn1" type="submit">
          <div className="txt-icon">
            <MessageIcon />
          </div>
          <div className="txt-label">Send now</div>
        </button>
      </form>
    </div>
  );
};

const Availability_card = () => {
  const [status, setStatus] = useState({
    isOpen: false,
    text: "Closed",
  });

  const checkAvailability = () => {
    const now = new Date();

    // Convert to IST
    const istTime = new Date(
      now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }),
    );

    const day = istTime.getDay(); // 0 = Sun, 6 = Sat
    const hours = istTime.getHours();
    const minutes = istTime.getMinutes();

    const currentTime = hours + minutes / 60;

    let isOpen = false;

    if (day >= 1 && day <= 5) {
      // Mon–Fri: 9 AM – 6 PM
      isOpen = currentTime >= 9 && currentTime < 18;
    } else if (day === 6) {
      // Sat: 10 AM – 2 PM
      isOpen = currentTime >= 10 && currentTime < 14;
    }

    setStatus({
      isOpen,
      text: isOpen ? "Open for Work" : "Currently Closed",
    });
  };

  useEffect(() => {
    checkAvailability();
    const interval = setInterval(checkAvailability, 60000); // update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="availability-card">
      <span className="avail-head">Timezone: IST (UTC +5:30)</span>

      <div className="info-card">
        <div className="txt-label">Availability Status</div>
        <div
          className={`label-value avail-status ${
            status.isOpen ? "open" : "closed"
          }`}
        >
          <div className="color-indicator"></div>
          <span>{status.text}</span>
        </div>
      </div>

      <div className="info-card">
        <div className="txt-label">Working Hours</div>
        <div className="label-value">
          <ul>
            <li>Mon to Fri: 09:00 AM - 06:00 PM</li>
            <li>Sat: 10:00 AM - 02:00 PM</li>
            <li>Sun: Off</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <section id="contact-sec">
      <h2 className="head1">Contact us now</h2>
      <p className="desc1">
        We are listening, contact us freely in our business hours for any type
        of queries or building order.
      </p>
      <div className="contact-parts">
        <Contact_form_card />
        <div className="social-link-part">
          <h4 className="head1">Our social profiles, you can visit</h4>
          <p className="desc1">
            To stay updated with us, follow us on these platforms and check our
            daily blogs by visiting our posts.
          </p>
          <div className="social-links-box">
            {contact_data.map((data, index) => (
              <Social_link_card key={index} {...data} />
            ))}
          </div>
        </div>
        {/* <div className="availabilty-info-box">
          <h4 className="head1">Below is our working time</h4>
          <p className="desc1">
            you can contact us for work if its inside working time.
          </p>
          <Availability_card />
        </div> */}
      </div>
    </section>
  );
};

export default Contact;

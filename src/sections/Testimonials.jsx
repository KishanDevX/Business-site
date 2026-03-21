import React from "react";
import "../stylesheets/testimonials.css";

const testimonials_data = [
  {
    ratings: 5,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.",
    profile_pic: "/assets/testi1.jpg",
    client_name: "John Doe",
    client_title: "CEO, Company Inc.",
  },
  {
    ratings: 4,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.",
    profile_pic: "/assets/testi2.jpg",
    client_name: "Jane Smith",
    client_title: "Marketing Manager, Business Co.",
  },
  {
    ratings: 1,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.",
    profile_pic: "/assets/testi3.jpg",
    client_name: "Alice Johnson",
    client_title: "Product Designer, Design Studio",
  },
  {
    ratings: 1,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.",
    profile_pic: "/assets/testi3.jpg",
    client_name: "Alice Johnson",
    client_title: "Product Designer, Design Studio",
  },
  {
    ratings: 1,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.",
    profile_pic: "/assets/testi3.jpg",
    client_name: "Alice Johnson",
    client_title: "Product Designer, Design Studio",
  },
];

const StarIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke_width="1.5"
      stroke="currentColor"
      className="icon icon-star"
    >
      <path
        stroke_linecap="round"
        stroke_linejoin="round"
        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
      />
    </svg>
  );
};

const Star_fillIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="icon icon-star-fill"
    >
      <path
        fill_rule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
        clip_rule="evenodd"
      />
    </svg>
  );
};

const Testimonial_card = ({
  ratings,
  message,
  profile_pic,
  client_name,
  client_title,
}) => {
  return (
    <div className="testimonial-card card1">
      <div className="testi-star-ratings">
        {[...Array(5)].map((_, i) =>
          i < ratings ? <Star_fillIcon key={i} /> : <StarIcon key={i} />,
        )}
      </div>
      <p className="testi-message">{message}</p>
      <hr className="testi-hr" />
      <div className="author-card">
        <div className="auth-img-box">
          {/* <img src={profile_pic} alt="client profile" className="auth-img" /> */}
        </div>
        <div className="auth-info">
          <h4 className="auth-name">{client_name}</h4>
          <p className="auth-title">{client_title}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="testimonial-sec">
      <h3 className="testimonial-sec-head head1">What our clients say</h3>
      <div className="testi-card-box">
        {testimonials_data.map((testimonial, index) => (
          <Testimonial_card key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

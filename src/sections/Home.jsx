import React from "react";
import "../stylesheets/home.css";
import home_visual from "../assets/images/home-visual.png";

const Home = () => {
  return (
    <section id="home-sec">
      <div className="visual-part home-part">
        <img src={home_visual} alt="visual" />
      </div>
      <div className="txt-part home-part">
        <h1 className="home-head">
          We focus on offering solutions, not templates
        </h1>
        <p className="home-desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, ad?
          Iusto tenetur nam officia aliquam unde voluptas! Quia, quis quas
          dolorum id quasi nulla sit! Suscipit dolorum veniam cum ex?
        </p>
        <div className="home-cta-btns">
          <button className="btn1">Contact us</button>
          <button className="btn2">Know more</button>
        </div>
      </div>
    </section>
  );
};

export default Home;

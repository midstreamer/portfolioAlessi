import React from "react";

import about from "../assets/images/about/buddha_012.jpg";
import utLogo from "../assets/images/about/UTlogo.png";
import engineeringLogo from "../assets/images/about/OfficLogo-Engineering.png";
import capstoneAlogo from "../assets/images/about/CapstoneALogo-Graduate.png";

export default props => {
  return (
    <section id="about">
      <div className="container">
        <h3 className="white-color">Who Am I?</h3>
        <hr className="white-color" />
        <p className="text-faded">
        I grew up loving to tinker and build things and dreamed of doing it
        for a living one day. So, when I graduated with a bachelor's in
        Chemical Engineering from the University of Alabama, it was both an
        accomplishment and a dream. Next, I went on to graduate school to
        study business and received a Master of Business Administration, where
        I became interested in helping small businesses grow their companies.
        I started learning web design and completed a full stack development
        Program from the University of Texas at Austin. Now I want to take my passion,
        education, and experience to develop websites and applications for
        small to medium size businesses.

        </p>
        <div className="row">
          <img
            id="aboutImg"
            className="col s10 m6 l4 offset-s1 offset-m3 offset-l4 responsive-img"
            src={about}
            alt="About me"
          />
        </div>
        <div className="text-faded center-align">
          <em>"Making complex, simple"."</em>
        </div>
        <p className="text-faded">
          I believe design should be intuitive, visually balanced, and it allows
          the content to shine. Designs that create a great user experience are
          significant because they cause people to buy products from the same
          company over and over again. Additionally, implementing designs with
          code efficiency in mind will enhance performance, scalability, and
          overall product quality. With this approach, there is no limit on what
          can be achieved.
        </p>

        <h4 className="white-color">Background</h4>
        <hr className="white-color sub" />
        <div className="row">
          <div className="col s12 m4">
            <img
              src={utLogo}
              alt="UTlogo"
              className="bgImg responsive-img"
            />
            <div className="background-text text-faded">
              Completing University of Texas{" "}
              <em>Full Stack Development Program </em>has laid the
              foundation for my <strong>software development</strong> career.
            </div>
          </div>
          <div className="col s12 m4">
            <img
              src={capstoneAlogo}
              alt="Capstone"
              className="bgImg responsive-img"
            />
            <div className="background-text text-faded">
              15+ years experience as an <strong>Product/Project Engineer </strong>in the{" "}
              <em>Oil and Gas Industry</em> has molded me into an engineer that
              can take a concept and develop it into a viable project/product.
            </div>
          </div>
          <div className="col s12 m4">
            <img
              src={engineeringLogo}
              alt="UA Engineering"
              className="bgImg responsive-img"
            />
            <div className="background-text text-faded">
              Earning my bachelor's degree in{" "}
              <strong>Chemical Engineering</strong> while applying best
              Engineering Practices <em /> approach is how I acquired my logical
              and analytical skills to handle complex problems.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

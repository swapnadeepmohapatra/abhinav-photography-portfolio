import React from "react";

const ContactHeader = () => {
  return (
    <React.Fragment>
      <header id="contactHeader">
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline" style={{ textAlign: "center" }}>
              Contact Me
            </h1>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#contact">
            <i className="icon-down-circle" />
          </a>
        </p>
      </header>
    </React.Fragment>
  );
};

export default ContactHeader;

import React from "react";

const Header = () => {
  return (
    <React.Fragment>
      <header id="home">
        <div className="row banner">
          <div className="banner-text">
            <h1>Abhinav's Photography</h1>

            <br />
            <div
              style={{
                marginTop: 50
              }}
            />
            <h2
              style={{
                color: "#EAF0F1",
                fontFamily: "sans-serif "
              }}
            >
              Abhinav Patnaik
            </h2>
            <hr />
            <ul className="social">
              {/* {resumeData.socialLinks &&
                  resumeData.socialLinks.map(item => {
                    return (
                      <li key={item.name}>
                        <a href={item.url} target="_blank">
                          <i className={item.className} />
                        </a>
                      </li>
                    );
                  })} */}
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle" />
          </a>
        </p>
      </header>
    </React.Fragment>
  );
};

export default Header;

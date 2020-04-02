import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#" title="Hide navigation">
            Hide navigation
          </a>
          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About Me
              </a>
            </li>
            <li>
              <a href="#photos" className="smoothscroll">
                My Clicks
              </a>
            </li>
            <li>
              <a href="#contact" className="smoothscroll">
                Contact Me
              </a>
            </li>
            <li>
              <a href="#feedback" className="smoothscroll">
                Feedback
              </a>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

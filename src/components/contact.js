import React, { Component } from "react";
export default class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: " ", message: "" };
  }

  render() {
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">Feel free to reach out</p>
          </div>
        </div>
        {/* <div className="row">
          <div>
            <form className="contact-form" onSubmit={e => this.formSubmit(e)}>
              <label class="message" htmlFor="message-input">
                Your Message
              </label>
              <textarea
                onChange={e => this.setState({ message: e.target.value })}
                name="message"
                class="message-input"
                type="text"
                placeholder="Please write your message here"
                value={this.state.message}
                required
              />

              <label class="message-name" htmlFor="message-name">
                Your Name
              </label>
              <input
                onChange={e => this.setState({ name: e.target.value })}
                name="name"
                class="message-name"
                type="text"
                placeholder="Your Name"
                value={this.state.name}
              />

              <label class="message-email" htmlFor="message-email">
                Your Email
              </label>
              <input
                onChange={e => this.setState({ email: e.target.value })}
                name="email"
                class="message-email"
                type="email"
                placeholder="your@email.com"
                required
                value={this.state.email}
              />

              <div className="button--container">
                <button
                  disabled={
                    this.state.name === "" ||
                    this.state.email === "" ||
                    this.state.message === ""
                  }
                  type="submit"
                  className="button button-primary"
                  onClick={event => {
                    event.preventDefault();
                    console.log(this.state);
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div> */}
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead" style={{ color: "#c1c1c1" }}>
              <ul>
                <li>Name : Abhinav Patnaik</li>
                <li>Email : patnaikabhinav2@gmail.com</li>
                <li>Phone Number : 6370073080</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead" style={{ color: "#ffffff" }}>
              This Website was developed by Swapnadeep Mohapatra. Feel free to
              contact me for any work or suggestions below.
            </p>
          </div>
        </div>
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead" style={{ color: "#c1c1c1" }}>
              <ul>
                <li>Name : Swapnadeep Mohapatra</li>
                <li>Email : swapnadeep456@gmail.com</li>
                <li>Phone Number : 8763039380</li>
                <li>Website : www.swapnadeep.com</li>
              </ul>
            </p>
          </div>
        </div>
      </section>
    );
  }
}

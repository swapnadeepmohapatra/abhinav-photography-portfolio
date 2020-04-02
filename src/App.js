import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import About from "./components/about";
import ClicksHeader from "./components/clicksHeader";
import MyClicks from "./components/myClicks";
import ContactUs from "./components/contact";
import ContactHeader from "./components/contactHeader";
import Footer from "./components/footer";

const Home = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <ClicksHeader />
      <MyClicks
        data={[
          {
            name: "Golden Gate Bridge",
            subTitle: "San Francisco, California",
            imgurl: "images/pics/1585555921691_IMG-20200322-WA0011.jpeg",
            description:
              "The Golden Gate Bridge is a suspension bridge spanning the Golden Gate, the one-mile-wide strait connecting San Francisco Bay and the Pacific Ocean."
          },
          {
            name: "Times Square",
            subTitle: "New York",
            description:
              "Times Square is a major commercial intersection, tourist destination, entertainment center, and neighborhood in the Midtown Manhattan section of New York City, at the junction of Broadway and Seventh Avenue.",
            imgurl: "images/pics/UNADJUSTEDNONRAW_thumb_3a3a.jpeg"
          }
        ]}
      />
      <ContactHeader />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;

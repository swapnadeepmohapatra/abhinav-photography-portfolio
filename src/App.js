import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import About from "./components/about";
import ClicksHeader from "./components/clicksHeader";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <ClicksHeader />
    </div>
  );
};

export default App;

import React, { useEffect} from "react";
import './App.css';
import './Stars.css';
import Header from "./components/Header";
import Body from "./components/Body";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import {Helmet} from "react-helmet";

function App(){

  return (
    <section class="wrapper">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Ahnaf Ahmad</title>
          <link rel="canonical" href="https://developer-xyyz.github.io/portfolio-app" />
          <meta name="description" content="Ahnaf Ahmad" />
        </Helmet>
        <Header/>
        <Body/>
        <Projects/>
        <Resume/>
        <Footer/>
    </div>
    </section>
    
  );
}

export default App;
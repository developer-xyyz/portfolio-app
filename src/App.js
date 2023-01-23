import React, { useEffect} from "react";
import './App.css';
import './Stars.css';
import Header from "./components/Header";
import Body from "./components/Body";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App(){

  useEffect(() => {
    document.title = "Ahnaf Ahmad";  
  }, []);

  return (
    <section class="wrapper">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="App">
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
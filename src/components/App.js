import React from "react";
import About from "./About";
import NavBar from "./NavBar";
import Home from "./Home";

function App() {
  return (
    <div>
      <NavBar />
      <Home username="Liza" city="New York" />
      <About image="https://i.imgur.com/mV8PQxj.gif" />
    </div>
  );
}

export default App;

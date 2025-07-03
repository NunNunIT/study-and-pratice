import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText);

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <div className="h-dvh "></div>
    </main>
  );
};

export default App;

import { Suspense } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText);

import { lazy } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";
// import About from "./components/About";
// import Art from "./components/Art";
import Menu from "./components/Menu";
import Contact from "./components/Contact";

const About = lazy(() => import("./components/About"));
const Art = lazy(() => import("./components/Art"));

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Suspense fallback={<div>...</div>}>
        <Cocktails />
      </Suspense>
      <Suspense fallback={<div>...</div>}>
        <About />
      </Suspense>
      <Suspense fallback={<div>...</div>}>
        <Art />
      </Suspense>
      <Suspense fallback={<div>...</div>}>
        <Menu />
      </Suspense>
      <Suspense fallback={<div>...</div>}>
        <Contact />
      </Suspense>
    </main>
  );
};

export default App;

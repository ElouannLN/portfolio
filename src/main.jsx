import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Course from "./sections/Course";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Activities from "./sections/Activities";
import Assos from "./sections/Assos";
import Footer from "./components/Footer";
import Header from "./components/Header";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Hero />
    <About />
    <Course />
    <Projects />
    <Skills />
    <Assos />
    <Activities />
    <Footer />
  </StrictMode>
);

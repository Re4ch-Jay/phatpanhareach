import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import ProjectList from "./components/ProjectList";
import Experiences from "./components/Experiences";
import Educations from "./components/Educations";
import Footer from "./components/Footer";
import Technologies from "./components/Technologies";

function App() {

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-500 min-h-screen">
      <Navbar />
      <Hero />
      <SocialLinks />
      <ProjectList />
      <Experiences />
      <Educations />
      <Technologies />
      <Footer />
    </div>
  );
}

export default App;

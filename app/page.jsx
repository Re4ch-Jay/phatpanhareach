import Certifications from "./components/Certifications";
import Educations from "./components/Educations";
import Experiences from "./components/Experiences";
import Hero from "./components/Hero";
import ProjectFeatures from "./components/ProjectFeatures";
import SocialLinks from "./components/SocialLinks";
import Technologies from "./components/Technologies";
import FashionGallery from "./components/FashionGallery";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialLinks />
      <Experiences />
      <ProjectFeatures />
      <Educations />
      <Certifications />
      <Technologies />
      <FashionGallery />
    </>
  )
}
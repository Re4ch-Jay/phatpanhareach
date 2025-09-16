import Educations from "./components/Educations";
import Experiences from "./components/Experiences";
import Hero from "./components/Hero";
import ProjectFeatures from "./components/ProjectFeatures";
import SocialLinks from "./components/SocialLinks";
import Technologies from "./components/Technologies";

export default function Home() {
  return (
    <div> 
      <Hero />
      <SocialLinks />
      <Experiences />
      <ProjectFeatures />
      <Educations />
      <Technologies />
    </div>
  )
}

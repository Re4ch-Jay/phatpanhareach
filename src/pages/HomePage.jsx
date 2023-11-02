import React from 'react'
import Hero from "../components/Hero";
import SocialLinks from "../components/SocialLinks";
import ProjectList from "../components/ProjectList";
import Experiences from "../components/Experiences";
import Educations from "../components/Educations";
import Technologies from "../components/Technologies";

export default function HomePage() {
  return (
    <>
        <Hero />
        <SocialLinks />
        <ProjectList />
        <Experiences />
        <Educations />
        <Technologies />
    </>
  )
}

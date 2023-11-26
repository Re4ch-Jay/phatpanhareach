
import ProjectList from "./ProjectList";

export const metadata  = {
  title: "Projects",
  description: "I'm an enthusiastic learner who thrives on exploring novel technologies.",
  openGraph: {
    title: "Projects",
    description: "I'm an enthusiastic learner who thrives on exploring novel technologies.",
  }
}

async function getData(url) {
  const res = await fetch(url);
  return res.json();
}

export default async function Projects() {
  
  const projects = await getData('https://api.github.com/users/Re4ch-Jay/repos?per_page=100&page=1');

  return (
    <div className='container mx-auto max-w-screen-lg px-4 py-5'>
      <ProjectList projects={projects} />
    </div>
  );
}

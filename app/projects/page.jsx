
import { defaultImage, homeUrl } from "../util";
import ProjectList from "./ProjectList";

export const metadata  = {
  title: "Projects",
  description: "I'm an enthusiastic learner who thrives on exploring novel technologies.",
  url: `${homeUrl}/projects`,
  alternates: {
    canonical: `${homeUrl}/projects`,
  },
  openGraph: {
    title: "Projects",
    description: "I'm an enthusiastic learner who thrives on exploring novel technologies.",
    type: "website",
    url: `${homeUrl}/projects`,
    alternates: {
      canonical: `${homeUrl}/projects`,
    },
    images: {
      url: defaultImage,
      secureUrl: defaultImage,
      width: 1200,
      height: 630,
      alt: 'Phat Panhareach',
    }
  },
  twitter: {
    card: 'summary_large_image',
    site: '@panhareach_phat',
    title: "Projects",
    description: "I'm an enthusiastic learner who thrives on exploring novel technologies.",
    creator: '@panhareach_phat',
    images: {
      url: defaultImage,
      alt: 'Phat Panhareach',
    }
  },
}
async function getData(url) {
  const res = await fetch(url);
  return res.json();
}

export default async function Projects() {
  
  const projects = await getData('https://api.github.com/users/Re4ch-Jay/repos?per_page=500&page=1');

  return (
    <div className='container mx-auto max-w-screen-lg px-4 py-5'>
      <ProjectList projects={projects} />
    </div>
  );
}

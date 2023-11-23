import {useState, useEffect} from 'react'
import useFetch from '../hooks/useFetch'
import Card from '../components/Card'
import { NavLink } from 'react-router-dom'
import Search from '../components/Search';

export default function GitHubProjectPage() {

    const [searchText, setSearchText] = useState('')
    const [filteredProjects, setFilteredProjects] = useState([]);    

    const { data: projects} = useFetch("https://api.github.com/users/Re4ch-Jay/repos?per_page=100&page=1")

    useEffect(() => {
        const filtered = projects.filter((project) => {
            const name = project.name.toLowerCase().includes(searchText.toLowerCase())
            const language = project.language && project.language.toLowerCase().includes(searchText.toLowerCase()) 

            return name || language;
        }
        );
        setFilteredProjects(filtered);
    }, [searchText, projects]);
    
    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };

  return (
    <div className='container mx-auto max-w-screen-lg px-4 py-5'>
        <Search searchText={searchText} handleSearchChange={handleSearchChange} placeholder="Search by Project name or language" />
        <div className='grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-5'>
            {filteredProjects.map(project => (
                <ProjectCard name={project.name} description={project.description} language={project.language} link={project.html_url} />
            ))}
        </div>
    </div>
  )
}

function ProjectCard({name, description, language, link, ...props}) {
    return (
      <NavLink to={link} {...props}>
      <Card className="sm:h-32 md:h-28">
        <>
            <p className="text-base">{name}</p>
            <p className="text-sm">{description && description.slice(0, 30)} {description && <>...</>}</p>
            <div className="flex flex-row flex-wrap mt-3 gap-1">
            
                <p className="px-8 text-center bg-gray-800 text-white text-sm rounded">
                {language}
                </p>
          
            </div>
        </>
      </Card>
      </NavLink>
    )
  }


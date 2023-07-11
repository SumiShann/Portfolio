import ProjectCard from "../ProjectCard/ProjectCard"
import projectsData from "../../data/projectsData"
import "./Projects.scss"

export default function Projects(){
    return (
        <div className="project-section">
            {projectsData.map((elt) => (
                <ProjectCard 
                key={elt.title}
                cover={elt.cover}
                title={elt.title}
                tags={elt.tags}
                image={elt.image}
                content={elt.content}
                github={elt.github}
                />
            ))}
        </div>
    )
}
import { useTranslation } from "react-i18next";
import ProjectCard from "../ProjectCard/ProjectCard"
import "./Projects.scss"

export default function Projects(){
    const { t } = useTranslation()
    const projectsData = t('projects', { returnObjects: true });

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
import React from 'react'
import ProjectSummary from './ProjectSummary'
import {Link} from 'react-router-dom'
//the mapping etc part for redux
const ProjectList =({projects})=>{

    return(
        <div className="project-list section">
            
            {projects && projects.map(project =>{

                return (
                    <Link to={'project/' + project.id }>
                        {/* <ProjectSummary project={project} key={project.id}/> */}
                    </Link>
                )
            })}
            
            {/* <ProjectSummary />
            <ProjectSummary />
            <ProjectSummary />
            <ProjectSummary /> */}

        </div>
    )
}
export default ProjectList
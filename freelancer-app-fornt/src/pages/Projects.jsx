import React from 'react'
import ProjectTable from '../features/projects/ProjectTable'
import useOwnerProjects from '../features/projects/useOwnerProjects'
import Loading from '../ui/Loading'
import ProjectsHeader from '../features/projects/ProjectsHeader'

function Projects() {
    const { isLoading } = useOwnerProjects()
    if (isLoading) return <Loading />
    return (
        <div>
            <ProjectsHeader />
            <ProjectTable />
        </div>
    )
}

export default Projects


